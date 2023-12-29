export interface weatherData {
  current_observation: {
    astronomy: {
      sunrise: string;
      sunset: string;
    };
    atmosphere: {
      humidity: number;
      pressure: number;
      visibility: number;
    };
    condition: {
      code: number;
      temperature: number;
      text: string;
    };
    pubDate: number;
    wind: {
      chill: number;
      direction: string;
      speed: number;
    };
  };
  forecasts: {
    0: {
      code: number;
      date: number;
      day: string;
      high: number;
      low: number;
      text: string;
      length: number;
    };
    1: {
      code: number;
      date: number;
      day: string;
      high: number;
      low: number;
      text: string;
      length: number;
    };
    2: {
      code: number;
      date: number;
      day: string;
      high: number;
      low: number;
      text: string;
      length: number;
    };
    3: {
      code: number;
      date: number;
      day: string;
      high: number;
      low: number;
      text: string;
      length: number;
    };
    4: {
      code: number;
      date: number;
      day: string;
      high: number;
      low: number;
      text: string;
      length: number;
    };
    5: {
      code: number;
      date: number;
      day: string;
      high: number;
      low: number;
      text: string;
      length: number;
    };
    6: {
      code: number;
      date: number;
      day: string;
      high: number;
      low: number;
      text: string;
      length: number;
    };
    7: {
      code: number;
      date: number;
      day: string;
      high: number;
      low: number;
      text: string;
      length: number;
    };
    8: {
      code: number;
      date: number;
      day: string;
      high: number;
      low: number;
      text: string;
      length: number;
    };
    9: {
      code: number;
      date: number;
      day: string;
      high: number;
      low: number;
      text: string;
      length: number;
    };
    10: {
      code: number;
      date: number;
      day: string;
      high: number;
      low: number;
      text: string;
      length: number;
    };
  };
  location: {
    city: string;
    country: string;
    lat: number;
    long: number;
    timezone_id: string;
    woeid: number;
  };
}
