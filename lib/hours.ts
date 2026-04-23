import { restaurantInfo } from "./menu";

type DayKey = "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";

const DAY_KEYS: DayKey[] = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

const DAY_LABELS: Record<DayKey, string> = {
  mon: "Måndag",
  tue: "Tisdag",
  wed: "Onsdag",
  thu: "Torsdag",
  fri: "Fredag",
  sat: "Lördag",
  sun: "Söndag",
};

function getSwedishTime(): Date {
  const now = new Date();
  const swedishString = now.toLocaleString("en-US", { timeZone: "Europe/Stockholm" });
  return new Date(swedishString);
}

function timeToMinutes(time: string): number {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
}

export interface OpenStatus {
  isOpen: boolean;
  isLunchTime: boolean;
  nextOpening?: string;
  closingSoon: boolean;
  todayHours: string;
}

export function getOpenStatus(): OpenStatus {
  const now = getSwedishTime();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const dayKey = DAY_KEYS[now.getDay()];
  const todayHours = restaurantInfo.hours[dayKey];

  let isOpen = false;
  let closingSoon = false;
  let isLunchTime = false;
  let todayHoursStr = "Stängt";

  if (todayHours) {
    todayHoursStr = `${todayHours.open} – ${todayHours.close}`;
    const openMin = timeToMinutes(todayHours.open);
    const closeMin = timeToMinutes(todayHours.close);
    isOpen = currentMinutes >= openMin && currentMinutes < closeMin;

    if (isOpen) {
      closingSoon = closeMin - currentMinutes <= 30;
      // Lunch 12:00-15:00
      isLunchTime = currentMinutes >= 720 && currentMinutes < 900;
    }
  }

  let nextOpening: string | undefined;
  if (!isOpen) {
    for (let i = 0; i < 7; i++) {
      const checkDay = DAY_KEYS[(now.getDay() + i) % 7];
      const checkHours = restaurantInfo.hours[checkDay];
      if (checkHours) {
        if (i === 0) {
          const openMin = timeToMinutes(checkHours.open);
          if (currentMinutes < openMin) {
            nextOpening = `Öppnar idag kl ${checkHours.open}`;
            break;
          }
        } else {
          const label = i === 1 ? "imorgon" : DAY_LABELS[checkDay].toLowerCase();
          nextOpening = `Öppnar ${label} kl ${checkHours.open}`;
          break;
        }
      }
    }
  }

  return {
    isOpen,
    isLunchTime,
    nextOpening,
    closingSoon,
    todayHours: todayHoursStr,
  };
}

export function getAllHours() {
  const order: DayKey[] = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
  return order.map((day) => {
    const hours = restaurantInfo.hours[day];
    return {
      day: DAY_LABELS[day],
      hours: hours ? `${hours.open} – ${hours.close}` : "Stängt",
    };
  });
}
