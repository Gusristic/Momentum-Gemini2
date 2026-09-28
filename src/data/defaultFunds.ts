import { FundISIN, HistoricalDataPoint } from '../types';

export const benchReturns = [
  0.025, 0.018, -0.012, 0.024,
  -0.038, -0.025, 0.012, -0.054, -0.008, -0.062, 0.051, -0.034, -0.068, 0.042, 0.031, -0.052,
  0.052, -0.018, 0.024, 0.011, -0.005, 0.041, 0.028, -0.021, -0.034, -0.022, 0.068, 0.045,
  0.018, 0.034, 0.025, -0.028, 0.039, 0.022, 0.011, 0.018, 0.014, -0.012, 0.042, -0.008,
  0.019, 0.014, -0.008, 0.017, 0.021, 0.009, -0.014, 0.022, 0.010, 0.008, 0.015, 0.011,
  0.012, 0.008, 0.014, -0.005, 0.011, 0.007, -0.003, 0.006
];

/**
 * 12 Slots Fijos Oficiales del Sistema Dual Momentum
 * Datos puros rescatados directamente de Yahoo Finance API (/v8/finance/chart)
 */
export const INITIAL_FUNDS: FundISIN[] = [
  {
    "id": "fund-1",
    "slotNumber": 1,
    "isin": "0P00000SUJ.F",
    "name": "Vanguard U.S. 500 Stk Idx € Acc",
    "ticker": "0P00000SUJ.F",
    "category": "US_EQUITY",
    "categoryLabel": "Renta Variable EE.UU. (S&P 500 / Nasdaq / Sectores)",
    "isSafeHaven": false,
    "currentNAV": 82.749,
    "currency": "EUR",
    "yahooUrl": "https://finance.yahoo.com/quote/0P00000SUJ.F",
    "sharesHeld": 85.5,
    "purchasePriceAvg": 70.2,
    "lastUpdated": "2026-09-24",
    "lastDateFormatted": "24/09/26",
    "return1M": 3.02,
    "return3M": 5.13,
    "return6M": 22.94,
    "return12M": 20.71,
    "return12Minus1M": 20.32,
    "return3YAnnualized": 19.2,
    "score12M": 0.20709650032602944,
    "score12_1": 0.20320121037809336,
    "scoreEquilibrado": 0.18261607310637798,
    "scoreProgresivo": 0.09405911949758042,
    "ytd": 0.16113687548673616,
    "ret3yAnnual": 0.19195128301287823,
    "ret5yAnnual": 0.1330827047015939,
    "periodReturns": {
      "1d": 0.00217513994288443,
      "1w": 0.018678668549346966,
      "1m": 0.030229989952801795,
      "3m": 0.0512735491296874,
      "6m": 0.22937704372475265,
      "1y": 0.20709650032602944,
      "2y": 0.3382551529510702,
      "3y": 0.6934622358473963,
      "5y": 0.8677040166842718
    },
    "periodPrices": {
      "1d": 82.5694,
      "1w": 81.2317,
      "1m": 80.3209,
      "3m": 78.7131,
      "6m": 67.3097,
      "1y": 68.5521,
      "2y": 61.8335,
      "3y": 48.8638,
      "5y": 44.3052
    },
    "volatility1Y": 12.66,
    "sharpeRatio": 1.35,
    "jensenAlpha": 6.75,
    "sortinoRatio": 1.98,
    "beta": 0.87,
    "maxDrawdown": -22.45,
    "history": [
      {
        "date": "2021-09-27",
        "nav": 44.31,
        "benchmarkNav": 42.09,
        "riskFreeNav": 100
      },
      {
        "date": "2021-10-26",
        "nav": 46.06,
        "benchmarkNav": 43.76,
        "riskFreeNav": 100
      },
      {
        "date": "2021-11-24",
        "nav": 49.06,
        "benchmarkNav": 46.61,
        "riskFreeNav": 100
      },
      {
        "date": "2021-12-23",
        "nav": 48.87,
        "benchmarkNav": 46.42,
        "riskFreeNav": 100
      },
      {
        "date": "2022-01-27",
        "nav": 45.4,
        "benchmarkNav": 43.13,
        "riskFreeNav": 100
      },
      {
        "date": "2022-02-25",
        "nav": 45.66,
        "benchmarkNav": 43.38,
        "riskFreeNav": 100
      },
      {
        "date": "2022-03-28",
        "nav": 48.89,
        "benchmarkNav": 46.45,
        "riskFreeNav": 100
      },
      {
        "date": "2022-04-28",
        "nav": 47.82,
        "benchmarkNav": 45.43,
        "riskFreeNav": 100
      },
      {
        "date": "2022-05-27",
        "nav": 45.59,
        "benchmarkNav": 43.31,
        "riskFreeNav": 100
      },
      {
        "date": "2022-06-27",
        "nav": 43.25,
        "benchmarkNav": 41.09,
        "riskFreeNav": 100
      },
      {
        "date": "2022-07-26",
        "nav": 45.51,
        "benchmarkNav": 43.23,
        "riskFreeNav": 100
      },
      {
        "date": "2022-08-24",
        "nav": 48.79,
        "benchmarkNav": 46.35,
        "riskFreeNav": 100
      },
      {
        "date": "2022-09-23",
        "nav": 44.84,
        "benchmarkNav": 42.6,
        "riskFreeNav": 100
      },
      {
        "date": "2022-10-24",
        "nav": 45.31,
        "benchmarkNav": 43.04,
        "riskFreeNav": 100
      },
      {
        "date": "2022-11-22",
        "nav": 45.96,
        "benchmarkNav": 43.67,
        "riskFreeNav": 100
      },
      {
        "date": "2022-12-21",
        "nav": 43.19,
        "benchmarkNav": 41.03,
        "riskFreeNav": 100
      },
      {
        "date": "2023-01-24",
        "nav": 43.69,
        "benchmarkNav": 41.5,
        "riskFreeNav": 100
      },
      {
        "date": "2023-02-22",
        "nav": 44.46,
        "benchmarkNav": 42.24,
        "riskFreeNav": 100
      },
      {
        "date": "2023-03-23",
        "nav": 42.99,
        "benchmarkNav": 40.84,
        "riskFreeNav": 100
      },
      {
        "date": "2023-04-25",
        "nav": 44,
        "benchmarkNav": 41.8,
        "riskFreeNav": 100
      },
      {
        "date": "2023-05-25",
        "nav": 45.95,
        "benchmarkNav": 43.65,
        "riskFreeNav": 100
      },
      {
        "date": "2023-06-23",
        "nav": 47.5,
        "benchmarkNav": 45.12,
        "riskFreeNav": 100
      },
      {
        "date": "2023-07-24",
        "nav": 48.89,
        "benchmarkNav": 46.45,
        "riskFreeNav": 100
      },
      {
        "date": "2023-08-22",
        "nav": 48.14,
        "benchmarkNav": 45.73,
        "riskFreeNav": 100
      },
      {
        "date": "2023-09-20",
        "nav": 48.93,
        "benchmarkNav": 46.49,
        "riskFreeNav": 100
      },
      {
        "date": "2023-10-19",
        "nav": 48.27,
        "benchmarkNav": 45.85,
        "riskFreeNav": 100
      },
      {
        "date": "2023-11-17",
        "nav": 49.48,
        "benchmarkNav": 47.01,
        "riskFreeNav": 100
      },
      {
        "date": "2023-12-18",
        "nav": 51.88,
        "benchmarkNav": 49.29,
        "riskFreeNav": 100
      },
      {
        "date": "2024-01-19",
        "nav": 53.16,
        "benchmarkNav": 50.5,
        "riskFreeNav": 100
      },
      {
        "date": "2024-02-19",
        "nav": 55.61,
        "benchmarkNav": 52.83,
        "riskFreeNav": 100
      },
      {
        "date": "2024-03-19",
        "nav": 57.1,
        "benchmarkNav": 54.25,
        "riskFreeNav": 100
      },
      {
        "date": "2024-04-19",
        "nav": 55.78,
        "benchmarkNav": 52.99,
        "riskFreeNav": 100
      },
      {
        "date": "2024-05-21",
        "nav": 58.76,
        "benchmarkNav": 55.82,
        "riskFreeNav": 100
      },
      {
        "date": "2024-06-19",
        "nav": 61.26,
        "benchmarkNav": 58.2,
        "riskFreeNav": 100
      },
      {
        "date": "2024-07-18",
        "nav": 60.99,
        "benchmarkNav": 57.94,
        "riskFreeNav": 100
      },
      {
        "date": "2024-08-16",
        "nav": 60.72,
        "benchmarkNav": 57.69,
        "riskFreeNav": 100
      },
      {
        "date": "2024-09-16",
        "nav": 60.9,
        "benchmarkNav": 57.86,
        "riskFreeNav": 100
      },
      {
        "date": "2024-10-15",
        "nav": 64.18,
        "benchmarkNav": 60.97,
        "riskFreeNav": 100
      },
      {
        "date": "2024-11-13",
        "nav": 68.04,
        "benchmarkNav": 64.64,
        "riskFreeNav": 100
      },
      {
        "date": "2024-12-12",
        "nav": 69.61,
        "benchmarkNav": 66.13,
        "riskFreeNav": 100
      },
      {
        "date": "2025-01-17",
        "nav": 70.2,
        "benchmarkNav": 66.69,
        "riskFreeNav": 100
      },
      {
        "date": "2025-02-17",
        "nav": 70.4,
        "benchmarkNav": 66.88,
        "riskFreeNav": 100
      },
      {
        "date": "2025-03-18",
        "nav": 62.06,
        "benchmarkNav": 58.96,
        "riskFreeNav": 100
      },
      {
        "date": "2025-04-16",
        "nav": 55.96,
        "benchmarkNav": 53.16,
        "riskFreeNav": 100
      },
      {
        "date": "2025-05-20",
        "nav": 63.76,
        "benchmarkNav": 60.57,
        "riskFreeNav": 100
      },
      {
        "date": "2025-06-18",
        "nav": 62.9,
        "benchmarkNav": 59.76,
        "riskFreeNav": 100
      },
      {
        "date": "2025-07-17",
        "nav": 65.81,
        "benchmarkNav": 62.52,
        "riskFreeNav": 100
      },
      {
        "date": "2025-08-15",
        "nav": 66.72,
        "benchmarkNav": 63.39,
        "riskFreeNav": 100
      },
      {
        "date": "2025-09-15",
        "nav": 68.23,
        "benchmarkNav": 64.82,
        "riskFreeNav": 100
      },
      {
        "date": "2025-10-14",
        "nav": 69.53,
        "benchmarkNav": 66.05,
        "riskFreeNav": 100
      },
      {
        "date": "2025-11-12",
        "nav": 71.71,
        "benchmarkNav": 68.12,
        "riskFreeNav": 100
      },
      {
        "date": "2025-12-11",
        "nav": 71.3,
        "benchmarkNav": 67.74,
        "riskFreeNav": 100
      },
      {
        "date": "2026-01-16",
        "nav": 72.76,
        "benchmarkNav": 69.12,
        "riskFreeNav": 100
      },
      {
        "date": "2026-02-16",
        "nav": 70.14,
        "benchmarkNav": 66.63,
        "riskFreeNav": 100
      },
      {
        "date": "2026-03-17",
        "nav": 70.95,
        "benchmarkNav": 67.4,
        "riskFreeNav": 100
      },
      {
        "date": "2026-04-17",
        "nav": 73.46,
        "benchmarkNav": 69.79,
        "riskFreeNav": 100
      },
      {
        "date": "2026-05-19",
        "nav": 77.27,
        "benchmarkNav": 73.41,
        "riskFreeNav": 100
      },
      {
        "date": "2026-06-17",
        "nav": 78.08,
        "benchmarkNav": 74.18,
        "riskFreeNav": 100
      },
      {
        "date": "2026-07-16",
        "nav": 80.32,
        "benchmarkNav": 76.31,
        "riskFreeNav": 100
      },
      {
        "date": "2026-08-14",
        "nav": 82.05,
        "benchmarkNav": 77.95,
        "riskFreeNav": 100
      },
      {
        "date": "2026-09-15",
        "nav": 80.27,
        "benchmarkNav": 76.26,
        "riskFreeNav": 100
      },
      {
        "date": "2026-09-24",
        "nav": 82.75,
        "benchmarkNav": 78.61,
        "riskFreeNav": 100
      }
    ],
    "isBlank": false,
    "isDisabled": false
  },
  {
    "id": "fund-2",
    "slotNumber": 2,
    "isin": "0P00000RQ8.F",
    "name": "Vanguard European Stock Idx Inv EUR Acc",
    "ticker": "0P00000RQ8.F",
    "category": "EUROPE_EQUITY",
    "categoryLabel": "Renta Variable Europa (MSCI Europe / Stoxx)",
    "isSafeHaven": false,
    "currentNAV": 41.1138,
    "currency": "EUR",
    "yahooUrl": "https://finance.yahoo.com/quote/0P00000RQ8.F",
    "sharesHeld": 0,
    "purchasePriceAvg": 0,
    "lastUpdated": "2026-09-24",
    "lastDateFormatted": "24/09/26",
    "return1M": -2.97,
    "return3M": 0.36,
    "return6M": 12.8,
    "return12M": 18.09,
    "return12Minus1M": 20.89,
    "return3YAnnualized": 15.19,
    "score12M": 0.18087792212268394,
    "score12_1": 0.20891097866124175,
    "scoreEquilibrado": 0.12954192997409017,
    "scoreProgresivo": 0.032880680794456454,
    "ytd": 0.10134608430104053,
    "ret3yAnnual": 0.15192916073920637,
    "ret5yAnnual": 0.09952005573543699,
    "periodReturns": {
      "1d": -0.006560300396517671,
      "1w": -0.00822104181441874,
      "1m": -0.029671237402940753,
      "3m": 0.0035564256091933366,
      "6m": 0.1279722793030318,
      "1y": 0.18087792212268394,
      "2y": 0.29223254892963,
      "3y": 0.5285417921434783,
      "5y": 0.6069996325857365
    },
    "periodPrices": {
      "1d": 41.3853,
      "1w": 41.4546,
      "1m": 42.371,
      "3m": 40.9681,
      "6m": 36.4493,
      "1y": 34.8163,
      "2y": 31.8161,
      "3y": 26.8974,
      "5y": 25.5842
    },
    "volatility1Y": 12.35,
    "sharpeRatio": 1.17,
    "jensenAlpha": 4.37,
    "sortinoRatio": 1.8,
    "beta": 0.85,
    "maxDrawdown": -19.29,
    "history": [
      {
        "date": "2021-09-27",
        "nav": 25.58,
        "benchmarkNav": 24.3,
        "riskFreeNav": 100
      },
      {
        "date": "2021-10-26",
        "nav": 26.41,
        "benchmarkNav": 25.09,
        "riskFreeNav": 100
      },
      {
        "date": "2021-11-24",
        "nav": 26.68,
        "benchmarkNav": 25.35,
        "riskFreeNav": 100
      },
      {
        "date": "2021-12-23",
        "nav": 26.92,
        "benchmarkNav": 25.57,
        "riskFreeNav": 100
      },
      {
        "date": "2022-01-27",
        "nav": 26.39,
        "benchmarkNav": 25.07,
        "riskFreeNav": 100
      },
      {
        "date": "2022-02-25",
        "nav": 25.53,
        "benchmarkNav": 24.25,
        "riskFreeNav": 100
      },
      {
        "date": "2022-03-28",
        "nav": 25.67,
        "benchmarkNav": 24.39,
        "riskFreeNav": 100
      },
      {
        "date": "2022-04-28",
        "nav": 25.39,
        "benchmarkNav": 24.12,
        "riskFreeNav": 100
      },
      {
        "date": "2022-05-27",
        "nav": 25.44,
        "benchmarkNav": 24.16,
        "riskFreeNav": 100
      },
      {
        "date": "2022-06-27",
        "nav": 23.88,
        "benchmarkNav": 22.69,
        "riskFreeNav": 100
      },
      {
        "date": "2022-07-26",
        "nav": 24.57,
        "benchmarkNav": 23.34,
        "riskFreeNav": 100
      },
      {
        "date": "2022-08-24",
        "nav": 24.98,
        "benchmarkNav": 23.73,
        "riskFreeNav": 100
      },
      {
        "date": "2022-09-23",
        "nav": 22.62,
        "benchmarkNav": 21.48,
        "riskFreeNav": 100
      },
      {
        "date": "2022-10-24",
        "nav": 23.3,
        "benchmarkNav": 22.14,
        "riskFreeNav": 100
      },
      {
        "date": "2022-11-22",
        "nav": 25.28,
        "benchmarkNav": 24.01,
        "riskFreeNav": 100
      },
      {
        "date": "2022-12-21",
        "nav": 25.03,
        "benchmarkNav": 23.78,
        "riskFreeNav": 100
      },
      {
        "date": "2023-01-24",
        "nav": 26.34,
        "benchmarkNav": 25.02,
        "riskFreeNav": 100
      },
      {
        "date": "2023-02-22",
        "nav": 26.89,
        "benchmarkNav": 25.54,
        "riskFreeNav": 100
      },
      {
        "date": "2023-03-23",
        "nav": 26.05,
        "benchmarkNav": 24.75,
        "riskFreeNav": 100
      },
      {
        "date": "2023-04-25",
        "nav": 27.47,
        "benchmarkNav": 26.09,
        "riskFreeNav": 100
      },
      {
        "date": "2023-05-25",
        "nav": 27.06,
        "benchmarkNav": 25.7,
        "riskFreeNav": 100
      },
      {
        "date": "2023-06-23",
        "nav": 26.94,
        "benchmarkNav": 25.59,
        "riskFreeNav": 100
      },
      {
        "date": "2023-07-24",
        "nav": 27.68,
        "benchmarkNav": 26.3,
        "riskFreeNav": 100
      },
      {
        "date": "2023-08-22",
        "nav": 26.93,
        "benchmarkNav": 25.58,
        "riskFreeNav": 100
      },
      {
        "date": "2023-09-20",
        "nav": 27.51,
        "benchmarkNav": 26.13,
        "riskFreeNav": 100
      },
      {
        "date": "2023-10-19",
        "nav": 26.3,
        "benchmarkNav": 24.99,
        "riskFreeNav": 100
      },
      {
        "date": "2023-11-17",
        "nav": 27.23,
        "benchmarkNav": 25.87,
        "riskFreeNav": 100
      },
      {
        "date": "2023-12-18",
        "nav": 28.4,
        "benchmarkNav": 26.98,
        "riskFreeNav": 100
      },
      {
        "date": "2024-01-19",
        "nav": 28.09,
        "benchmarkNav": 26.68,
        "riskFreeNav": 100
      },
      {
        "date": "2024-02-19",
        "nav": 29.5,
        "benchmarkNav": 28.03,
        "riskFreeNav": 100
      },
      {
        "date": "2024-03-19",
        "nav": 30.33,
        "benchmarkNav": 28.82,
        "riskFreeNav": 100
      },
      {
        "date": "2024-04-19",
        "nav": 30.1,
        "benchmarkNav": 28.59,
        "riskFreeNav": 100
      },
      {
        "date": "2024-05-21",
        "nav": 31.86,
        "benchmarkNav": 30.27,
        "riskFreeNav": 100
      },
      {
        "date": "2024-06-19",
        "nav": 31.45,
        "benchmarkNav": 29.88,
        "riskFreeNav": 100
      },
      {
        "date": "2024-07-18",
        "nav": 31.39,
        "benchmarkNav": 29.82,
        "riskFreeNav": 100
      },
      {
        "date": "2024-08-16",
        "nav": 31.32,
        "benchmarkNav": 29.76,
        "riskFreeNav": 100
      },
      {
        "date": "2024-09-16",
        "nav": 31.53,
        "benchmarkNav": 29.96,
        "riskFreeNav": 100
      },
      {
        "date": "2024-10-15",
        "nav": 31.91,
        "benchmarkNav": 30.31,
        "riskFreeNav": 100
      },
      {
        "date": "2024-11-13",
        "nav": 30.75,
        "benchmarkNav": 29.21,
        "riskFreeNav": 100
      },
      {
        "date": "2024-12-12",
        "nav": 31.94,
        "benchmarkNav": 30.34,
        "riskFreeNav": 100
      },
      {
        "date": "2025-01-17",
        "nav": 32.2,
        "benchmarkNav": 30.59,
        "riskFreeNav": 100
      },
      {
        "date": "2025-02-17",
        "nav": 34.22,
        "benchmarkNav": 32.51,
        "riskFreeNav": 100
      },
      {
        "date": "2025-03-18",
        "nav": 34.17,
        "benchmarkNav": 32.46,
        "riskFreeNav": 100
      },
      {
        "date": "2025-04-16",
        "nav": 31.38,
        "benchmarkNav": 29.81,
        "riskFreeNav": 100
      },
      {
        "date": "2025-05-20",
        "nav": 34.64,
        "benchmarkNav": 32.91,
        "riskFreeNav": 100
      },
      {
        "date": "2025-06-18",
        "nav": 33.85,
        "benchmarkNav": 32.16,
        "riskFreeNav": 100
      },
      {
        "date": "2025-07-17",
        "nav": 34.27,
        "benchmarkNav": 32.55,
        "riskFreeNav": 100
      },
      {
        "date": "2025-08-15",
        "nav": 34.73,
        "benchmarkNav": 32.99,
        "riskFreeNav": 100
      },
      {
        "date": "2025-09-15",
        "nav": 35.07,
        "benchmarkNav": 33.32,
        "riskFreeNav": 100
      },
      {
        "date": "2025-10-14",
        "nav": 35.54,
        "benchmarkNav": 33.76,
        "riskFreeNav": 100
      },
      {
        "date": "2025-11-12",
        "nav": 36.84,
        "benchmarkNav": 35,
        "riskFreeNav": 100
      },
      {
        "date": "2025-12-11",
        "nav": 36.65,
        "benchmarkNav": 34.82,
        "riskFreeNav": 100
      },
      {
        "date": "2026-01-16",
        "nav": 38.71,
        "benchmarkNav": 36.77,
        "riskFreeNav": 100
      },
      {
        "date": "2026-02-16",
        "nav": 38.98,
        "benchmarkNav": 37.03,
        "riskFreeNav": 100
      },
      {
        "date": "2026-03-17",
        "nav": 38.13,
        "benchmarkNav": 36.22,
        "riskFreeNav": 100
      },
      {
        "date": "2026-04-17",
        "nav": 39.75,
        "benchmarkNav": 37.76,
        "riskFreeNav": 100
      },
      {
        "date": "2026-05-19",
        "nav": 39.14,
        "benchmarkNav": 37.19,
        "riskFreeNav": 100
      },
      {
        "date": "2026-06-17",
        "nav": 41.12,
        "benchmarkNav": 39.06,
        "riskFreeNav": 100
      },
      {
        "date": "2026-07-16",
        "nav": 41.44,
        "benchmarkNav": 39.36,
        "riskFreeNav": 100
      },
      {
        "date": "2026-08-14",
        "nav": 42.45,
        "benchmarkNav": 40.33,
        "riskFreeNav": 100
      },
      {
        "date": "2026-09-15",
        "nav": 40.92,
        "benchmarkNav": 38.87,
        "riskFreeNav": 100
      },
      {
        "date": "2026-09-24",
        "nav": 41.11,
        "benchmarkNav": 39.06,
        "riskFreeNav": 100
      }
    ],
    "isBlank": false,
    "isDisabled": false
  },
  {
    "id": "fund-3",
    "slotNumber": 3,
    "isin": "0P000060MS.F",
    "name": "Vanguard Emerg Mkts Stk Idx Inv EUR Acc",
    "ticker": "0P000060MS.F",
    "category": "EMERGING_EQUITY",
    "categoryLabel": "Renta Variable Mercados Emergentes",
    "isSafeHaven": false,
    "currentNAV": 318.3561,
    "currency": "EUR",
    "yahooUrl": "https://finance.yahoo.com/quote/0P000060MS.F",
    "sharesHeld": 20,
    "purchasePriceAvg": 280,
    "lastUpdated": "2026-09-24",
    "lastDateFormatted": "24/09/26",
    "return1M": 4.47,
    "return3M": 2.27,
    "return6M": 23.41,
    "return12M": 34.59,
    "return12Minus1M": 35,
    "return3YAnnualized": 21.37,
    "score12M": 0.3458647633695058,
    "score12_1": 0.3500414002453447,
    "scoreEquilibrado": 0.24772652403849527,
    "scoreProgresivo": 0.10611853361394077,
    "ytd": 0.2954628133812418,
    "ret3yAnnual": 0.21374187139259293,
    "ret5yAnnual": 0.09528232456444852,
    "periodReturns": {
      "1d": -0.007016099224748107,
      "1w": 0.036255386243896126,
      "1m": 0.04469543781859575,
      "3m": 0.022746723482341746,
      "6m": 0.23414932552424683,
      "1y": 0.3458647633695058,
      "2y": 0.5682558777064644,
      "3y": 0.7880472999233912,
      "5y": 0.5762692227138841
    },
    "periodPrices": {
      "1d": 320.6055,
      "1w": 307.2178,
      "1m": 304.7358,
      "3m": 311.2756,
      "6m": 257.9559,
      "1y": 236.5439,
      "2y": 203.0001,
      "3y": 178.0468,
      "5y": 201.9681
    },
    "volatility1Y": 22.37,
    "sharpeRatio": 1.38,
    "jensenAlpha": 14.35,
    "sortinoRatio": 2.06,
    "beta": 1.4,
    "maxDrawdown": -23.61,
    "history": [
      {
        "date": "2021-09-27",
        "nav": 201.97,
        "benchmarkNav": 191.87,
        "riskFreeNav": 100
      },
      {
        "date": "2021-10-26",
        "nav": 209.5,
        "benchmarkNav": 199.02,
        "riskFreeNav": 100
      },
      {
        "date": "2021-11-24",
        "nav": 208.96,
        "benchmarkNav": 198.51,
        "riskFreeNav": 100
      },
      {
        "date": "2021-12-23",
        "nav": 202.61,
        "benchmarkNav": 192.48,
        "riskFreeNav": 100
      },
      {
        "date": "2022-01-27",
        "nav": 201.01,
        "benchmarkNav": 190.96,
        "riskFreeNav": 100
      },
      {
        "date": "2022-02-25",
        "nav": 196.31,
        "benchmarkNav": 186.49,
        "riskFreeNav": 100
      },
      {
        "date": "2022-03-28",
        "nav": 193.36,
        "benchmarkNav": 183.69,
        "riskFreeNav": 100
      },
      {
        "date": "2022-04-28",
        "nav": 189.38,
        "benchmarkNav": 179.91,
        "riskFreeNav": 100
      },
      {
        "date": "2022-05-27",
        "nav": 184.75,
        "benchmarkNav": 175.51,
        "riskFreeNav": 100
      },
      {
        "date": "2022-06-27",
        "nav": 184.54,
        "benchmarkNav": 175.31,
        "riskFreeNav": 100
      },
      {
        "date": "2022-07-26",
        "nav": 186.82,
        "benchmarkNav": 177.48,
        "riskFreeNav": 100
      },
      {
        "date": "2022-08-24",
        "nav": 189.01,
        "benchmarkNav": 179.56,
        "riskFreeNav": 100
      },
      {
        "date": "2022-09-23",
        "nav": 179.19,
        "benchmarkNav": 170.23,
        "riskFreeNav": 100
      },
      {
        "date": "2022-10-24",
        "nav": 163.76,
        "benchmarkNav": 155.57,
        "riskFreeNav": 100
      },
      {
        "date": "2022-11-22",
        "nav": 173.54,
        "benchmarkNav": 164.87,
        "riskFreeNav": 100
      },
      {
        "date": "2022-12-21",
        "nav": 173.03,
        "benchmarkNav": 164.38,
        "riskFreeNav": 100
      },
      {
        "date": "2023-01-24",
        "nav": 184.52,
        "benchmarkNav": 175.29,
        "riskFreeNav": 100
      },
      {
        "date": "2023-02-22",
        "nav": 178.5,
        "benchmarkNav": 169.57,
        "riskFreeNav": 100
      },
      {
        "date": "2023-03-23",
        "nav": 174.2,
        "benchmarkNav": 165.49,
        "riskFreeNav": 100
      },
      {
        "date": "2023-04-25",
        "nav": 170.68,
        "benchmarkNav": 162.15,
        "riskFreeNav": 100
      },
      {
        "date": "2023-05-25",
        "nav": 174.67,
        "benchmarkNav": 165.94,
        "riskFreeNav": 100
      },
      {
        "date": "2023-06-23",
        "nav": 177.69,
        "benchmarkNav": 168.81,
        "riskFreeNav": 100
      },
      {
        "date": "2023-07-24",
        "nav": 179.35,
        "benchmarkNav": 170.38,
        "riskFreeNav": 100
      },
      {
        "date": "2023-08-22",
        "nav": 175.05,
        "benchmarkNav": 166.3,
        "riskFreeNav": 100
      },
      {
        "date": "2023-09-20",
        "nav": 178.07,
        "benchmarkNav": 169.16,
        "riskFreeNav": 100
      },
      {
        "date": "2023-10-19",
        "nav": 173.38,
        "benchmarkNav": 164.71,
        "riskFreeNav": 100
      },
      {
        "date": "2023-11-17",
        "nav": 176.5,
        "benchmarkNav": 167.67,
        "riskFreeNav": 100
      },
      {
        "date": "2023-12-18",
        "nav": 179.83,
        "benchmarkNav": 170.84,
        "riskFreeNav": 100
      },
      {
        "date": "2024-01-19",
        "nav": 175.74,
        "benchmarkNav": 166.95,
        "riskFreeNav": 100
      },
      {
        "date": "2024-02-19",
        "nav": 185.86,
        "benchmarkNav": 176.57,
        "riskFreeNav": 100
      },
      {
        "date": "2024-03-19",
        "nav": 186.87,
        "benchmarkNav": 177.53,
        "riskFreeNav": 100
      },
      {
        "date": "2024-04-19",
        "nav": 186.29,
        "benchmarkNav": 176.97,
        "riskFreeNav": 100
      },
      {
        "date": "2024-05-21",
        "nav": 199.74,
        "benchmarkNav": 189.75,
        "riskFreeNav": 100
      },
      {
        "date": "2024-06-19",
        "nav": 202.59,
        "benchmarkNav": 192.46,
        "riskFreeNav": 100
      },
      {
        "date": "2024-07-18",
        "nav": 202.36,
        "benchmarkNav": 192.24,
        "riskFreeNav": 100
      },
      {
        "date": "2024-08-16",
        "nav": 199.21,
        "benchmarkNav": 189.25,
        "riskFreeNav": 100
      },
      {
        "date": "2024-09-16",
        "nav": 195.15,
        "benchmarkNav": 185.39,
        "riskFreeNav": 100
      },
      {
        "date": "2024-10-15",
        "nav": 211.69,
        "benchmarkNav": 201.11,
        "riskFreeNav": 100
      },
      {
        "date": "2024-11-13",
        "nav": 207.88,
        "benchmarkNav": 197.48,
        "riskFreeNav": 100
      },
      {
        "date": "2024-12-12",
        "nav": 213.82,
        "benchmarkNav": 203.13,
        "riskFreeNav": 100
      },
      {
        "date": "2025-01-17",
        "nav": 209.9,
        "benchmarkNav": 199.4,
        "riskFreeNav": 100
      },
      {
        "date": "2025-02-17",
        "nav": 218.24,
        "benchmarkNav": 207.33,
        "riskFreeNav": 100
      },
      {
        "date": "2025-03-18",
        "nav": 212.55,
        "benchmarkNav": 201.92,
        "riskFreeNav": 100
      },
      {
        "date": "2025-04-16",
        "nav": 189.05,
        "benchmarkNav": 179.6,
        "riskFreeNav": 100
      },
      {
        "date": "2025-05-20",
        "nav": 210.97,
        "benchmarkNav": 200.42,
        "riskFreeNav": 100
      },
      {
        "date": "2025-06-18",
        "nav": 211.59,
        "benchmarkNav": 201.01,
        "riskFreeNav": 100
      },
      {
        "date": "2025-07-17",
        "nav": 219.25,
        "benchmarkNav": 208.29,
        "riskFreeNav": 100
      },
      {
        "date": "2025-08-15",
        "nav": 222.97,
        "benchmarkNav": 211.82,
        "riskFreeNav": 100
      },
      {
        "date": "2025-09-15",
        "nav": 232.14,
        "benchmarkNav": 220.53,
        "riskFreeNav": 100
      },
      {
        "date": "2025-10-14",
        "nav": 237.44,
        "benchmarkNav": 225.57,
        "riskFreeNav": 100
      },
      {
        "date": "2025-11-12",
        "nav": 249.56,
        "benchmarkNav": 237.08,
        "riskFreeNav": 100
      },
      {
        "date": "2025-12-11",
        "nav": 241.07,
        "benchmarkNav": 229.02,
        "riskFreeNav": 100
      },
      {
        "date": "2026-01-16",
        "nav": 263.94,
        "benchmarkNav": 250.74,
        "riskFreeNav": 100
      },
      {
        "date": "2026-02-16",
        "nav": 270.75,
        "benchmarkNav": 257.22,
        "riskFreeNav": 100
      },
      {
        "date": "2026-03-17",
        "nav": 268.2,
        "benchmarkNav": 254.79,
        "riskFreeNav": 100
      },
      {
        "date": "2026-04-17",
        "nav": 279.65,
        "benchmarkNav": 265.66,
        "riskFreeNav": 100
      },
      {
        "date": "2026-05-19",
        "nav": 292.99,
        "benchmarkNav": 278.34,
        "riskFreeNav": 100
      },
      {
        "date": "2026-06-17",
        "nav": 319.59,
        "benchmarkNav": 303.61,
        "riskFreeNav": 100
      },
      {
        "date": "2026-07-16",
        "nav": 302.78,
        "benchmarkNav": 287.64,
        "riskFreeNav": 100
      },
      {
        "date": "2026-08-14",
        "nav": 306.38,
        "benchmarkNav": 291.07,
        "riskFreeNav": 100
      },
      {
        "date": "2026-09-15",
        "nav": 304.15,
        "benchmarkNav": 288.94,
        "riskFreeNav": 100
      },
      {
        "date": "2026-09-24",
        "nav": 318.36,
        "benchmarkNav": 302.44,
        "riskFreeNav": 100
      }
    ],
    "isBlank": false,
    "isDisabled": false
  },
  {
    "id": "fund-4",
    "slotNumber": 4,
    "isin": "0P00012I66.F",
    "name": "Vanguard Glbl Small-Cap Idx Inv EUR Acc",
    "ticker": "0P00012I66.F",
    "category": "GLOBAL_SMALL_CAP",
    "categoryLabel": "Small Caps Globales Indexadas",
    "isSafeHaven": false,
    "currentNAV": 442.1294,
    "currency": "EUR",
    "yahooUrl": "https://finance.yahoo.com/quote/0P00012I66.F",
    "sharesHeld": 0,
    "purchasePriceAvg": 0,
    "lastUpdated": "2026-09-24",
    "lastDateFormatted": "24/09/26",
    "return1M": -1.91,
    "return3M": -2.17,
    "return6M": 14.32,
    "return12M": 20.59,
    "return12Minus1M": 24.64,
    "return3YAnnualized": 15.1,
    "score12M": 0.20594548048726646,
    "score12_1": 0.24640488553401085,
    "scoreEquilibrado": 0.14160545010073355,
    "scoreProgresivo": 0.035101263086067494,
    "ytd": 0.15963865533875676,
    "ret3yAnnual": 0.15098558732247613,
    "ret5yAnnual": 0.06978021844007265,
    "periodReturns": {
      "1d": -0.0032484140619875035,
      "1w": -0.003352444430618773,
      "1m": -0.01907779032290635,
      "3m": -0.021703852429380888,
      "6m": 0.14324493447658826,
      "1y": 0.20594548048726646,
      "2y": 0.3016619595819767,
      "3y": 0.5247886699284834,
      "5y": 0.4011118783633083
    },
    "periodPrices": {
      "1d": 443.5703,
      "1w": 443.6166,
      "1m": 450.7283,
      "3m": 451.9382,
      "6m": 386.732,
      "1y": 366.6247,
      "2y": 339.6653,
      "3y": 289.9611,
      "5y": 315.5561
    },
    "volatility1Y": 12.42,
    "sharpeRatio": 1.36,
    "jensenAlpha": 6.75,
    "sortinoRatio": 2.07,
    "beta": 0.86,
    "maxDrawdown": -22.27,
    "history": [
      {
        "date": "2021-09-27",
        "nav": 315.56,
        "benchmarkNav": 299.78,
        "riskFreeNav": 100
      },
      {
        "date": "2021-10-26",
        "nav": 321.06,
        "benchmarkNav": 305.01,
        "riskFreeNav": 100
      },
      {
        "date": "2021-11-24",
        "nav": 329.6,
        "benchmarkNav": 313.12,
        "riskFreeNav": 100
      },
      {
        "date": "2021-12-23",
        "nav": 319.54,
        "benchmarkNav": 303.57,
        "riskFreeNav": 100
      },
      {
        "date": "2022-01-27",
        "nav": 293,
        "benchmarkNav": 278.35,
        "riskFreeNav": 100
      },
      {
        "date": "2022-02-25",
        "nav": 299.58,
        "benchmarkNav": 284.6,
        "riskFreeNav": 100
      },
      {
        "date": "2022-03-28",
        "nav": 310.7,
        "benchmarkNav": 295.17,
        "riskFreeNav": 100
      },
      {
        "date": "2022-04-28",
        "nav": 303.84,
        "benchmarkNav": 288.65,
        "riskFreeNav": 100
      },
      {
        "date": "2022-05-27",
        "nav": 295.37,
        "benchmarkNav": 280.6,
        "riskFreeNav": 100
      },
      {
        "date": "2022-06-27",
        "nav": 276.67,
        "benchmarkNav": 262.84,
        "riskFreeNav": 100
      },
      {
        "date": "2022-07-26",
        "nav": 292.43,
        "benchmarkNav": 277.81,
        "riskFreeNav": 100
      },
      {
        "date": "2022-08-24",
        "nav": 310.16,
        "benchmarkNav": 294.65,
        "riskFreeNav": 100
      },
      {
        "date": "2022-09-23",
        "nav": 280.67,
        "benchmarkNav": 266.63,
        "riskFreeNav": 100
      },
      {
        "date": "2022-10-24",
        "nav": 281.17,
        "benchmarkNav": 267.11,
        "riskFreeNav": 100
      },
      {
        "date": "2022-11-22",
        "nav": 295.55,
        "benchmarkNav": 280.77,
        "riskFreeNav": 100
      },
      {
        "date": "2022-12-21",
        "nav": 280.73,
        "benchmarkNav": 266.69,
        "riskFreeNav": 100
      },
      {
        "date": "2023-01-24",
        "nav": 293.72,
        "benchmarkNav": 279.04,
        "riskFreeNav": 100
      },
      {
        "date": "2023-02-22",
        "nav": 298.47,
        "benchmarkNav": 283.55,
        "riskFreeNav": 100
      },
      {
        "date": "2023-03-23",
        "nav": 273.89,
        "benchmarkNav": 260.19,
        "riskFreeNav": 100
      },
      {
        "date": "2023-04-25",
        "nav": 278.53,
        "benchmarkNav": 264.61,
        "riskFreeNav": 100
      },
      {
        "date": "2023-05-25",
        "nav": 281.81,
        "benchmarkNav": 267.72,
        "riskFreeNav": 100
      },
      {
        "date": "2023-06-23",
        "nav": 285.53,
        "benchmarkNav": 271.25,
        "riskFreeNav": 100
      },
      {
        "date": "2023-07-24",
        "nav": 299.28,
        "benchmarkNav": 284.31,
        "riskFreeNav": 100
      },
      {
        "date": "2023-08-22",
        "nav": 289.2,
        "benchmarkNav": 274.74,
        "riskFreeNav": 100
      },
      {
        "date": "2023-09-20",
        "nav": 291.82,
        "benchmarkNav": 277.23,
        "riskFreeNav": 100
      },
      {
        "date": "2023-10-19",
        "nav": 276.74,
        "benchmarkNav": 262.9,
        "riskFreeNav": 100
      },
      {
        "date": "2023-11-17",
        "nav": 284.67,
        "benchmarkNav": 270.44,
        "riskFreeNav": 100
      },
      {
        "date": "2023-12-18",
        "nav": 307.13,
        "benchmarkNav": 291.77,
        "riskFreeNav": 100
      },
      {
        "date": "2024-01-19",
        "nav": 304.42,
        "benchmarkNav": 289.2,
        "riskFreeNav": 100
      },
      {
        "date": "2024-02-19",
        "nav": 317.52,
        "benchmarkNav": 301.64,
        "riskFreeNav": 100
      },
      {
        "date": "2024-03-19",
        "nav": 320.34,
        "benchmarkNav": 304.32,
        "riskFreeNav": 100
      },
      {
        "date": "2024-04-19",
        "nav": 314.51,
        "benchmarkNav": 298.78,
        "riskFreeNav": 100
      },
      {
        "date": "2024-05-21",
        "nav": 330.23,
        "benchmarkNav": 313.72,
        "riskFreeNav": 100
      },
      {
        "date": "2024-06-19",
        "nav": 323.61,
        "benchmarkNav": 307.43,
        "riskFreeNav": 100
      },
      {
        "date": "2024-07-18",
        "nav": 336.17,
        "benchmarkNav": 319.36,
        "riskFreeNav": 100
      },
      {
        "date": "2024-08-16",
        "nav": 330.21,
        "benchmarkNav": 313.7,
        "riskFreeNav": 100
      },
      {
        "date": "2024-09-16",
        "nav": 334.4,
        "benchmarkNav": 317.68,
        "riskFreeNav": 100
      },
      {
        "date": "2024-10-15",
        "nav": 349.07,
        "benchmarkNav": 331.61,
        "riskFreeNav": 100
      },
      {
        "date": "2024-11-13",
        "nav": 363.42,
        "benchmarkNav": 345.25,
        "riskFreeNav": 100
      },
      {
        "date": "2024-12-12",
        "nav": 371.06,
        "benchmarkNav": 352.51,
        "riskFreeNav": 100
      },
      {
        "date": "2025-01-17",
        "nav": 367.49,
        "benchmarkNav": 349.12,
        "riskFreeNav": 100
      },
      {
        "date": "2025-02-17",
        "nav": 368.69,
        "benchmarkNav": 350.25,
        "riskFreeNav": 100
      },
      {
        "date": "2025-03-18",
        "nav": 334.55,
        "benchmarkNav": 317.82,
        "riskFreeNav": 100
      },
      {
        "date": "2025-04-16",
        "nav": 301.09,
        "benchmarkNav": 286.04,
        "riskFreeNav": 100
      },
      {
        "date": "2025-05-20",
        "nav": 339.47,
        "benchmarkNav": 322.5,
        "riskFreeNav": 100
      },
      {
        "date": "2025-06-18",
        "nav": 336.86,
        "benchmarkNav": 320.01,
        "riskFreeNav": 100
      },
      {
        "date": "2025-07-17",
        "nav": 350.91,
        "benchmarkNav": 333.36,
        "riskFreeNav": 100
      },
      {
        "date": "2025-08-15",
        "nav": 354.7,
        "benchmarkNav": 336.96,
        "riskFreeNav": 100
      },
      {
        "date": "2025-09-15",
        "nav": 366.9,
        "benchmarkNav": 348.55,
        "riskFreeNav": 100
      },
      {
        "date": "2025-10-14",
        "nav": 373.48,
        "benchmarkNav": 354.8,
        "riskFreeNav": 100
      },
      {
        "date": "2025-11-12",
        "nav": 374.96,
        "benchmarkNav": 356.21,
        "riskFreeNav": 100
      },
      {
        "date": "2025-12-11",
        "nav": 383.33,
        "benchmarkNav": 364.16,
        "riskFreeNav": 100
      },
      {
        "date": "2026-01-16",
        "nav": 407.42,
        "benchmarkNav": 387.05,
        "riskFreeNav": 100
      },
      {
        "date": "2026-02-16",
        "nav": 407.29,
        "benchmarkNav": 386.93,
        "riskFreeNav": 100
      },
      {
        "date": "2026-03-17",
        "nav": 398.21,
        "benchmarkNav": 378.3,
        "riskFreeNav": 100
      },
      {
        "date": "2026-04-17",
        "nav": 418.83,
        "benchmarkNav": 397.89,
        "riskFreeNav": 100
      },
      {
        "date": "2026-05-19",
        "nav": 420.29,
        "benchmarkNav": 399.27,
        "riskFreeNav": 100
      },
      {
        "date": "2026-06-17",
        "nav": 440.36,
        "benchmarkNav": 418.34,
        "riskFreeNav": 100
      },
      {
        "date": "2026-07-16",
        "nav": 445.4,
        "benchmarkNav": 423.13,
        "riskFreeNav": 100
      },
      {
        "date": "2026-08-14",
        "nav": 459.83,
        "benchmarkNav": 436.84,
        "riskFreeNav": 100
      },
      {
        "date": "2026-09-15",
        "nav": 439.12,
        "benchmarkNav": 417.16,
        "riskFreeNav": 100
      },
      {
        "date": "2026-09-24",
        "nav": 442.13,
        "benchmarkNav": 420.02,
        "riskFreeNav": 100
      }
    ],
    "isBlank": false,
    "isDisabled": false
  },
  {
    "id": "fund-5",
    "slotNumber": 5,
    "isin": "0P0001CLDI.F",
    "name": "Fidelity MSCI Japan Index EUR P Acc",
    "ticker": "0P0001CLDI.F",
    "category": "JAPAN_EQUITY",
    "categoryLabel": "Renta Variable Japón (Topix / MSCI Japan Index)",
    "isSafeHaven": false,
    "currentNAV": 10.4783,
    "currency": "EUR",
    "yahooUrl": "https://finance.yahoo.com/quote/0P0001CLDI.F",
    "sharesHeld": 0,
    "purchasePriceAvg": 0,
    "lastUpdated": "2026-09-24",
    "lastDateFormatted": "24/09/26",
    "return1M": 2.46,
    "return3M": 3.46,
    "return6M": 15.66,
    "return12M": 27.27,
    "return12Minus1M": 25.42,
    "return3YAnnualized": 16.46,
    "score12M": 0.2726731687172823,
    "score12_1": 0.25418511387188936,
    "scoreEquilibrado": 0.19024519509958707,
    "scoreProgresivo": 0.07883007547213668,
    "ytd": 0.2278586327310228,
    "ret3yAnnual": 0.16463926482770752,
    "ret5yAnnual": 0.09068877174147949,
    "periodReturns": {
      "1d": -0.0062781544881216345,
      "1w": -0.012794301919145212,
      "1m": 0.024622304796362515,
      "3m": 0.034648577127396996,
      "6m": 0.1565963177182217,
      "1y": 0.2726731687172823,
      "2y": 0.4081465355050262,
      "3y": 0.5796987833742897,
      "5y": 0.5434913901041436
    },
    "periodPrices": {
      "1d": 10.5445,
      "1w": 10.6141,
      "1m": 10.2265,
      "3m": 10.1274,
      "6m": 9.0596,
      "1y": 8.2333,
      "2y": 7.4412,
      "3y": 6.6331,
      "5y": 6.7887
    },
    "volatility1Y": 21.04,
    "sharpeRatio": 1.12,
    "jensenAlpha": 7.03,
    "sortinoRatio": 1.69,
    "beta": 1.4,
    "maxDrawdown": -19.26,
    "history": [
      {
        "date": "2021-09-27",
        "nav": 6.79,
        "benchmarkNav": 6.45,
        "riskFreeNav": 100
      },
      {
        "date": "2021-10-26",
        "nav": 6.48,
        "benchmarkNav": 6.16,
        "riskFreeNav": 100
      },
      {
        "date": "2021-11-24",
        "nav": 6.69,
        "benchmarkNav": 6.36,
        "riskFreeNav": 100
      },
      {
        "date": "2021-12-23",
        "nav": 6.6,
        "benchmarkNav": 6.27,
        "riskFreeNav": 100
      },
      {
        "date": "2022-01-27",
        "nav": 6.13,
        "benchmarkNav": 5.83,
        "riskFreeNav": 100
      },
      {
        "date": "2022-02-25",
        "nav": 6.15,
        "benchmarkNav": 5.84,
        "riskFreeNav": 100
      },
      {
        "date": "2022-03-28",
        "nav": 6.23,
        "benchmarkNav": 5.92,
        "riskFreeNav": 100
      },
      {
        "date": "2022-04-28",
        "nav": 5.94,
        "benchmarkNav": 5.65,
        "riskFreeNav": 100
      },
      {
        "date": "2022-05-27",
        "nav": 5.98,
        "benchmarkNav": 5.68,
        "riskFreeNav": 100
      },
      {
        "date": "2022-06-27",
        "nav": 5.66,
        "benchmarkNav": 5.38,
        "riskFreeNav": 100
      },
      {
        "date": "2022-07-26",
        "nav": 6.04,
        "benchmarkNav": 5.74,
        "riskFreeNav": 100
      },
      {
        "date": "2022-08-24",
        "nav": 6.19,
        "benchmarkNav": 5.88,
        "riskFreeNav": 100
      },
      {
        "date": "2022-09-22",
        "nav": 5.89,
        "benchmarkNav": 5.6,
        "riskFreeNav": 100
      },
      {
        "date": "2022-10-21",
        "nav": 5.53,
        "benchmarkNav": 5.25,
        "riskFreeNav": 100
      },
      {
        "date": "2022-11-21",
        "nav": 5.88,
        "benchmarkNav": 5.59,
        "riskFreeNav": 100
      },
      {
        "date": "2022-12-20",
        "nav": 5.89,
        "benchmarkNav": 5.59,
        "riskFreeNav": 100
      },
      {
        "date": "2023-01-20",
        "nav": 5.92,
        "benchmarkNav": 5.63,
        "riskFreeNav": 100
      },
      {
        "date": "2023-02-20",
        "nav": 6.03,
        "benchmarkNav": 5.73,
        "riskFreeNav": 100
      },
      {
        "date": "2023-03-21",
        "nav": 5.85,
        "benchmarkNav": 5.55,
        "riskFreeNav": 100
      },
      {
        "date": "2023-04-21",
        "nav": 6.02,
        "benchmarkNav": 5.72,
        "riskFreeNav": 100
      },
      {
        "date": "2023-05-23",
        "nav": 6.35,
        "benchmarkNav": 6.03,
        "riskFreeNav": 100
      },
      {
        "date": "2023-06-21",
        "nav": 6.5,
        "benchmarkNav": 6.17,
        "riskFreeNav": 100
      },
      {
        "date": "2023-07-20",
        "nav": 6.36,
        "benchmarkNav": 6.04,
        "riskFreeNav": 100
      },
      {
        "date": "2023-08-18",
        "nav": 6.21,
        "benchmarkNav": 5.9,
        "riskFreeNav": 100
      },
      {
        "date": "2023-09-18",
        "nav": 6.76,
        "benchmarkNav": 6.42,
        "riskFreeNav": 100
      },
      {
        "date": "2023-10-17",
        "nav": 6.42,
        "benchmarkNav": 6.1,
        "riskFreeNav": 100
      },
      {
        "date": "2023-11-15",
        "nav": 6.43,
        "benchmarkNav": 6.11,
        "riskFreeNav": 100
      },
      {
        "date": "2023-12-14",
        "nav": 6.59,
        "benchmarkNav": 6.27,
        "riskFreeNav": 100
      },
      {
        "date": "2024-01-17",
        "nav": 6.9,
        "benchmarkNav": 6.56,
        "riskFreeNav": 100
      },
      {
        "date": "2024-02-15",
        "nav": 7.19,
        "benchmarkNav": 6.83,
        "riskFreeNav": 100
      },
      {
        "date": "2024-03-15",
        "nav": 7.34,
        "benchmarkNav": 6.98,
        "riskFreeNav": 100
      },
      {
        "date": "2024-04-17",
        "nav": 7.28,
        "benchmarkNav": 6.92,
        "riskFreeNav": 100
      },
      {
        "date": "2024-05-17",
        "nav": 7.32,
        "benchmarkNav": 6.96,
        "riskFreeNav": 100
      },
      {
        "date": "2024-06-17",
        "nav": 7.18,
        "benchmarkNav": 6.82,
        "riskFreeNav": 100
      },
      {
        "date": "2024-07-16",
        "nav": 7.63,
        "benchmarkNav": 7.25,
        "riskFreeNav": 100
      },
      {
        "date": "2024-08-15",
        "nav": 7.16,
        "benchmarkNav": 6.8,
        "riskFreeNav": 100
      },
      {
        "date": "2024-09-13",
        "nav": 7.39,
        "benchmarkNav": 7.02,
        "riskFreeNav": 100
      },
      {
        "date": "2024-10-14",
        "nav": 7.5,
        "benchmarkNav": 7.13,
        "riskFreeNav": 100
      },
      {
        "date": "2024-11-12",
        "nav": 7.59,
        "benchmarkNav": 7.21,
        "riskFreeNav": 100
      },
      {
        "date": "2024-12-11",
        "nav": 7.8,
        "benchmarkNav": 7.41,
        "riskFreeNav": 100
      },
      {
        "date": "2025-01-16",
        "nav": 7.62,
        "benchmarkNav": 7.24,
        "riskFreeNav": 100
      },
      {
        "date": "2025-02-14",
        "nav": 7.83,
        "benchmarkNav": 7.43,
        "riskFreeNav": 100
      },
      {
        "date": "2025-03-17",
        "nav": 7.64,
        "benchmarkNav": 7.25,
        "riskFreeNav": 100
      },
      {
        "date": "2025-04-15",
        "nav": 7.04,
        "benchmarkNav": 6.68,
        "riskFreeNav": 100
      },
      {
        "date": "2025-05-19",
        "nav": 7.63,
        "benchmarkNav": 7.25,
        "riskFreeNav": 100
      },
      {
        "date": "2025-06-17",
        "nav": 7.55,
        "benchmarkNav": 7.18,
        "riskFreeNav": 100
      },
      {
        "date": "2025-07-16",
        "nav": 7.41,
        "benchmarkNav": 7.03,
        "riskFreeNav": 100
      },
      {
        "date": "2025-08-14",
        "nav": 8.06,
        "benchmarkNav": 7.66,
        "riskFreeNav": 100
      },
      {
        "date": "2025-09-12",
        "nav": 8.26,
        "benchmarkNav": 7.84,
        "riskFreeNav": 100
      },
      {
        "date": "2025-10-13",
        "nav": 8.36,
        "benchmarkNav": 7.94,
        "riskFreeNav": 100
      },
      {
        "date": "2025-11-11",
        "nav": 8.61,
        "benchmarkNav": 8.17,
        "riskFreeNav": 100
      },
      {
        "date": "2025-12-10",
        "nav": 8.57,
        "benchmarkNav": 8.14,
        "riskFreeNav": 100
      },
      {
        "date": "2026-01-15",
        "nav": 9.21,
        "benchmarkNav": 8.75,
        "riskFreeNav": 100
      },
      {
        "date": "2026-02-13",
        "nav": 9.71,
        "benchmarkNav": 9.22,
        "riskFreeNav": 100
      },
      {
        "date": "2026-03-16",
        "nav": 9.07,
        "benchmarkNav": 8.61,
        "riskFreeNav": 100
      },
      {
        "date": "2026-04-16",
        "nav": 9.46,
        "benchmarkNav": 8.99,
        "riskFreeNav": 100
      },
      {
        "date": "2026-05-18",
        "nav": 9.62,
        "benchmarkNav": 9.14,
        "riskFreeNav": 100
      },
      {
        "date": "2026-06-16",
        "nav": 10.13,
        "benchmarkNav": 9.62,
        "riskFreeNav": 100
      },
      {
        "date": "2026-07-15",
        "nav": 10.33,
        "benchmarkNav": 9.81,
        "riskFreeNav": 100
      },
      {
        "date": "2026-08-13",
        "nav": 10.6,
        "benchmarkNav": 10.07,
        "riskFreeNav": 100
      },
      {
        "date": "2026-09-14",
        "nav": 10.56,
        "benchmarkNav": 10.04,
        "riskFreeNav": 100
      },
      {
        "date": "2026-09-24",
        "nav": 10.48,
        "benchmarkNav": 9.95,
        "riskFreeNav": 100
      }
    ],
    "isBlank": false,
    "isDisabled": false
  },
  {
    "id": "fund-6",
    "slotNumber": 6,
    "isin": "0P0001IFKL.F",
    "name": "Pictet-Pacific Ex Japan Index IS EUR",
    "ticker": "0P0001IFKL.F",
    "category": "JAPAN_EQUITY",
    "categoryLabel": "Renta Variable Japón (Topix / MSCI Japan Index)",
    "isSafeHaven": false,
    "currentNAV": 639.34,
    "currency": "EUR",
    "yahooUrl": "https://finance.yahoo.com/quote/0P0001IFKL.F",
    "sharesHeld": 0,
    "purchasePriceAvg": 0,
    "lastUpdated": "2026-09-24",
    "lastDateFormatted": "24/09/26",
    "return1M": -2.64,
    "return3M": 4.75,
    "return6M": 8.67,
    "return12M": 15.99,
    "return12Minus1M": 17.58,
    "return3YAnnualized": 13.26,
    "score12M": 0.15990566037735854,
    "score12_1": 0.17576495443396078,
    "scoreEquilibrado": 0.1154653189461669,
    "scoreProgresivo": 0.03700483861452142,
    "ytd": 0.14335276655102125,
    "ret3yAnnual": 0.13256584081082812,
    "ret5yAnnual": 0.06806721803714644,
    "periodReturns": {
      "1d": -0.007498020708818998,
      "1w": -0.0020292207792207417,
      "1m": -0.026435206334703865,
      "3m": 0.04748017563405216,
      "6m": 0.08672151210225731,
      "1y": 0.15990566037735854,
      "2y": 0.23118103564482295,
      "3y": 0.45274830148378764,
      "5y": 0.3899299969563894
    },
    "periodPrices": {
      "1d": 644.17,
      "1w": 640.64,
      "1m": 656.7,
      "3m": 610.36,
      "6m": 588.32,
      "1y": 551.2,
      "2y": 519.29,
      "3y": 440.09,
      "5y": 459.98
    },
    "volatility1Y": 12.09,
    "sharpeRatio": 1.02,
    "jensenAlpha": 2.51,
    "sortinoRatio": 1.55,
    "beta": 0.83,
    "maxDrawdown": -19.53,
    "history": [
      {
        "date": "2022-03-07",
        "nav": 459.98,
        "benchmarkNav": 436.98,
        "riskFreeNav": 100
      },
      {
        "date": "2022-03-31",
        "nav": 487.28,
        "benchmarkNav": 462.92,
        "riskFreeNav": 100
      },
      {
        "date": "2022-04-29",
        "nav": 483.47,
        "benchmarkNav": 459.3,
        "riskFreeNav": 100
      },
      {
        "date": "2022-05-31",
        "nav": 475.22,
        "benchmarkNav": 451.46,
        "riskFreeNav": 100
      },
      {
        "date": "2022-06-29",
        "nav": 451.15,
        "benchmarkNav": 428.59,
        "riskFreeNav": 100
      },
      {
        "date": "2022-07-26",
        "nav": 471.1,
        "benchmarkNav": 447.55,
        "riskFreeNav": 100
      },
      {
        "date": "2022-08-22",
        "nav": 484.44,
        "benchmarkNav": 460.22,
        "riskFreeNav": 100
      },
      {
        "date": "2022-09-15",
        "nav": 462.72,
        "benchmarkNav": 439.58,
        "riskFreeNav": 100
      },
      {
        "date": "2022-10-11",
        "nav": 438.43,
        "benchmarkNav": 416.51,
        "riskFreeNav": 100
      },
      {
        "date": "2022-11-07",
        "nav": 445.28,
        "benchmarkNav": 423.02,
        "riskFreeNav": 100
      },
      {
        "date": "2022-11-30",
        "nav": 475.52,
        "benchmarkNav": 451.74,
        "riskFreeNav": 100
      },
      {
        "date": "2022-12-29",
        "nav": 458.22,
        "benchmarkNav": 435.31,
        "riskFreeNav": 100
      },
      {
        "date": "2023-01-31",
        "nav": 490.32,
        "benchmarkNav": 465.8,
        "riskFreeNav": 100
      },
      {
        "date": "2023-02-23",
        "nav": 474.06,
        "benchmarkNav": 450.36,
        "riskFreeNav": 100
      },
      {
        "date": "2023-03-20",
        "nav": 448.88,
        "benchmarkNav": 426.44,
        "riskFreeNav": 100
      },
      {
        "date": "2023-04-18",
        "nav": 467.54,
        "benchmarkNav": 444.16,
        "riskFreeNav": 100
      },
      {
        "date": "2023-05-16",
        "nav": 457.58,
        "benchmarkNav": 434.7,
        "riskFreeNav": 100
      },
      {
        "date": "2023-06-15",
        "nav": 463.16,
        "benchmarkNav": 440,
        "riskFreeNav": 100
      },
      {
        "date": "2023-07-13",
        "nav": 453.61,
        "benchmarkNav": 430.93,
        "riskFreeNav": 100
      },
      {
        "date": "2023-08-07",
        "nav": 448.57,
        "benchmarkNav": 426.14,
        "riskFreeNav": 100
      },
      {
        "date": "2023-09-04",
        "nav": 449.02,
        "benchmarkNav": 426.57,
        "riskFreeNav": 100
      },
      {
        "date": "2023-09-28",
        "nav": 438.54,
        "benchmarkNav": 416.61,
        "riskFreeNav": 100
      },
      {
        "date": "2023-10-26",
        "nav": 424.18,
        "benchmarkNav": 402.97,
        "riskFreeNav": 100
      },
      {
        "date": "2023-11-22",
        "nav": 440.38,
        "benchmarkNav": 418.36,
        "riskFreeNav": 100
      },
      {
        "date": "2023-12-15",
        "nav": 460.18,
        "benchmarkNav": 437.17,
        "riskFreeNav": 100
      },
      {
        "date": "2024-01-19",
        "nav": 448.32,
        "benchmarkNav": 425.9,
        "riskFreeNav": 100
      },
      {
        "date": "2024-02-19",
        "nav": 468.02,
        "benchmarkNav": 444.62,
        "riskFreeNav": 100
      },
      {
        "date": "2024-03-13",
        "nav": 474.44,
        "benchmarkNav": 450.72,
        "riskFreeNav": 100
      },
      {
        "date": "2024-04-11",
        "nav": 476.07,
        "benchmarkNav": 452.27,
        "riskFreeNav": 100
      },
      {
        "date": "2024-05-08",
        "nav": 484.66,
        "benchmarkNav": 460.43,
        "riskFreeNav": 100
      },
      {
        "date": "2024-06-06",
        "nav": 487.04,
        "benchmarkNav": 462.69,
        "riskFreeNav": 100
      },
      {
        "date": "2024-07-04",
        "nav": 492.29,
        "benchmarkNav": 467.68,
        "riskFreeNav": 100
      },
      {
        "date": "2024-07-30",
        "nav": 486,
        "benchmarkNav": 461.7,
        "riskFreeNav": 100
      },
      {
        "date": "2024-08-26",
        "nav": 496.87,
        "benchmarkNav": 472.03,
        "riskFreeNav": 100
      },
      {
        "date": "2024-09-20",
        "nav": 516.24,
        "benchmarkNav": 490.43,
        "riskFreeNav": 100
      },
      {
        "date": "2024-10-18",
        "nav": 535.55,
        "benchmarkNav": 508.77,
        "riskFreeNav": 100
      },
      {
        "date": "2024-11-14",
        "nav": 532.37,
        "benchmarkNav": 505.75,
        "riskFreeNav": 100
      },
      {
        "date": "2024-12-09",
        "nav": 545.86,
        "benchmarkNav": 518.57,
        "riskFreeNav": 100
      },
      {
        "date": "2025-01-08",
        "nav": 536.23,
        "benchmarkNav": 509.42,
        "riskFreeNav": 100
      },
      {
        "date": "2025-01-31",
        "nav": 541.5,
        "benchmarkNav": 514.42,
        "riskFreeNav": 100
      },
      {
        "date": "2025-02-25",
        "nav": 537.67,
        "benchmarkNav": 510.79,
        "riskFreeNav": 100
      },
      {
        "date": "2025-03-20",
        "nav": 510.89,
        "benchmarkNav": 485.35,
        "riskFreeNav": 100
      },
      {
        "date": "2025-04-14",
        "nav": 467.91,
        "benchmarkNav": 444.51,
        "riskFreeNav": 100
      },
      {
        "date": "2025-05-12",
        "nav": 523.51,
        "benchmarkNav": 497.33,
        "riskFreeNav": 100
      },
      {
        "date": "2025-06-04",
        "nav": 536.71,
        "benchmarkNav": 509.87,
        "riskFreeNav": 100
      },
      {
        "date": "2025-06-27",
        "nav": 528.94,
        "benchmarkNav": 502.49,
        "riskFreeNav": 100
      },
      {
        "date": "2025-07-22",
        "nav": 539.62,
        "benchmarkNav": 512.64,
        "riskFreeNav": 100
      },
      {
        "date": "2025-08-14",
        "nav": 554.61,
        "benchmarkNav": 526.88,
        "riskFreeNav": 100
      },
      {
        "date": "2025-09-09",
        "nav": 557.16,
        "benchmarkNav": 529.3,
        "riskFreeNav": 100
      },
      {
        "date": "2025-10-03",
        "nav": 564.47,
        "benchmarkNav": 536.25,
        "riskFreeNav": 100
      },
      {
        "date": "2025-10-30",
        "nav": 563.86,
        "benchmarkNav": 535.67,
        "riskFreeNav": 100
      },
      {
        "date": "2025-11-24",
        "nav": 546.37,
        "benchmarkNav": 519.05,
        "riskFreeNav": 100
      },
      {
        "date": "2025-12-17",
        "nav": 544.52,
        "benchmarkNav": 517.29,
        "riskFreeNav": 100
      },
      {
        "date": "2026-01-19",
        "nav": 575.01,
        "benchmarkNav": 546.26,
        "riskFreeNav": 100
      },
      {
        "date": "2026-02-11",
        "nav": 606.39,
        "benchmarkNav": 576.07,
        "riskFreeNav": 100
      },
      {
        "date": "2026-03-06",
        "nav": 607.95,
        "benchmarkNav": 577.55,
        "riskFreeNav": 100
      },
      {
        "date": "2026-03-31",
        "nav": 584,
        "benchmarkNav": 554.8,
        "riskFreeNav": 100
      },
      {
        "date": "2026-04-27",
        "nav": 610.13,
        "benchmarkNav": 579.62,
        "riskFreeNav": 100
      },
      {
        "date": "2026-05-21",
        "nav": 615.81,
        "benchmarkNav": 585.02,
        "riskFreeNav": 100
      },
      {
        "date": "2026-06-15",
        "nav": 616.88,
        "benchmarkNav": 586.04,
        "riskFreeNav": 100
      },
      {
        "date": "2026-07-08",
        "nav": 619.63,
        "benchmarkNav": 588.65,
        "riskFreeNav": 100
      },
      {
        "date": "2026-08-03",
        "nav": 645.54,
        "benchmarkNav": 613.26,
        "riskFreeNav": 100
      },
      {
        "date": "2026-08-26",
        "nav": 654.42,
        "benchmarkNav": 621.7,
        "riskFreeNav": 100
      },
      {
        "date": "2026-09-21",
        "nav": 644.45,
        "benchmarkNav": 612.23,
        "riskFreeNav": 100
      },
      {
        "date": "2026-09-24",
        "nav": 639.34,
        "benchmarkNav": 607.37,
        "riskFreeNav": 100
      }
    ],
    "isBlank": false,
    "isDisabled": false
  },
  {
    "id": "fund-7",
    "slotNumber": 7,
    "isin": "0P000172KL.F",
    "name": "DWS Invest CROCI Sectors Plus LC",
    "ticker": "0P000172KL.F",
    "category": "US_EQUITY",
    "categoryLabel": "Renta Variable EE.UU. (S&P 500 / Nasdaq / Sectores)",
    "isSafeHaven": false,
    "currentNAV": 289.89,
    "currency": "EUR",
    "yahooUrl": "https://finance.yahoo.com/quote/0P000172KL.F",
    "sharesHeld": 0,
    "purchasePriceAvg": 0,
    "lastUpdated": "2026-09-24",
    "lastDateFormatted": "24/09/26",
    "return1M": -2.33,
    "return3M": 0.96,
    "return6M": -0.34,
    "return12M": 20.62,
    "return12Minus1M": 21.38,
    "return3YAnnualized": 6.6,
    "score12M": 0.20621645237798014,
    "score12_1": 0.21378915514844188,
    "scoreEquilibrado": 0.10400262852972564,
    "scoreProgresivo": 0.013475121756244546,
    "ytd": 0.16258271505915367,
    "ret3yAnnual": 0.06595609176130734,
    "ret5yAnnual": 0.04219488691019202,
    "periodReturns": {
      "1d": -0.0036089915446484433,
      "1w": -0.020674977196716293,
      "1m": -0.023347483323226226,
      "3m": 0.009577209723479863,
      "6m": -0.0034034653465346842,
      "1y": 0.20621645237798014,
      "2y": 0.18091086850252558,
      "3y": 0.21120581599398336,
      "5y": 0.22954574373329928
    },
    "periodPrices": {
      "1d": 290.94,
      "1w": 296.01,
      "1m": 296.82,
      "3m": 287.14,
      "6m": 290.88,
      "1y": 240.33,
      "2y": 245.48,
      "3y": 239.34,
      "5y": 235.77
    },
    "volatility1Y": 12.02,
    "sharpeRatio": 1.41,
    "jensenAlpha": 7.14,
    "sortinoRatio": 2.14,
    "beta": 0.83,
    "maxDrawdown": -17.78,
    "history": [
      {
        "date": "2022-03-07",
        "nav": 235.77,
        "benchmarkNav": 223.98,
        "riskFreeNav": 100
      },
      {
        "date": "2022-03-30",
        "nav": 239.59,
        "benchmarkNav": 227.61,
        "riskFreeNav": 100
      },
      {
        "date": "2022-04-26",
        "nav": 232.82,
        "benchmarkNav": 221.18,
        "riskFreeNav": 100
      },
      {
        "date": "2022-05-23",
        "nav": 229.63,
        "benchmarkNav": 218.15,
        "riskFreeNav": 100
      },
      {
        "date": "2022-06-27",
        "nav": 209.72,
        "benchmarkNav": 199.23,
        "riskFreeNav": 100
      },
      {
        "date": "2022-07-21",
        "nav": 215.21,
        "benchmarkNav": 204.45,
        "riskFreeNav": 100
      },
      {
        "date": "2022-08-16",
        "nav": 234.91,
        "benchmarkNav": 223.16,
        "riskFreeNav": 100
      },
      {
        "date": "2022-09-12",
        "nav": 233.43,
        "benchmarkNav": 221.76,
        "riskFreeNav": 100
      },
      {
        "date": "2022-10-10",
        "nav": 222.11,
        "benchmarkNav": 211,
        "riskFreeNav": 100
      },
      {
        "date": "2022-11-03",
        "nav": 225.01,
        "benchmarkNav": 213.76,
        "riskFreeNav": 100
      },
      {
        "date": "2022-11-29",
        "nav": 236.68,
        "benchmarkNav": 224.85,
        "riskFreeNav": 100
      },
      {
        "date": "2022-12-22",
        "nav": 223.03,
        "benchmarkNav": 211.88,
        "riskFreeNav": 100
      },
      {
        "date": "2023-01-23",
        "nav": 232.92,
        "benchmarkNav": 221.27,
        "riskFreeNav": 100
      },
      {
        "date": "2023-02-15",
        "nav": 238.62,
        "benchmarkNav": 226.69,
        "riskFreeNav": 100
      },
      {
        "date": "2023-03-13",
        "nav": 229.02,
        "benchmarkNav": 217.57,
        "riskFreeNav": 100
      },
      {
        "date": "2023-04-11",
        "nav": 231.76,
        "benchmarkNav": 220.17,
        "riskFreeNav": 100
      },
      {
        "date": "2023-05-05",
        "nav": 217.33,
        "benchmarkNav": 206.46,
        "riskFreeNav": 100
      },
      {
        "date": "2023-06-05",
        "nav": 224.74,
        "benchmarkNav": 213.5,
        "riskFreeNav": 100
      },
      {
        "date": "2023-07-03",
        "nav": 229.13,
        "benchmarkNav": 217.67,
        "riskFreeNav": 100
      },
      {
        "date": "2023-07-27",
        "nav": 235.04,
        "benchmarkNav": 223.29,
        "riskFreeNav": 100
      },
      {
        "date": "2023-08-23",
        "nav": 230.08,
        "benchmarkNav": 218.58,
        "riskFreeNav": 100
      },
      {
        "date": "2023-09-19",
        "nav": 243.79,
        "benchmarkNav": 231.6,
        "riskFreeNav": 100
      },
      {
        "date": "2023-10-16",
        "nav": 240.73,
        "benchmarkNav": 228.69,
        "riskFreeNav": 100
      },
      {
        "date": "2023-11-09",
        "nav": 230.04,
        "benchmarkNav": 218.54,
        "riskFreeNav": 100
      },
      {
        "date": "2023-12-05",
        "nav": 237.36,
        "benchmarkNav": 225.49,
        "riskFreeNav": 100
      },
      {
        "date": "2024-01-09",
        "nav": 239.2,
        "benchmarkNav": 227.24,
        "riskFreeNav": 100
      },
      {
        "date": "2024-02-05",
        "nav": 231.49,
        "benchmarkNav": 219.92,
        "riskFreeNav": 100
      },
      {
        "date": "2024-02-29",
        "nav": 230.38,
        "benchmarkNav": 218.86,
        "riskFreeNav": 100
      },
      {
        "date": "2024-03-25",
        "nav": 244.11,
        "benchmarkNav": 231.9,
        "riskFreeNav": 100
      },
      {
        "date": "2024-04-19",
        "nav": 246.67,
        "benchmarkNav": 234.34,
        "riskFreeNav": 100
      },
      {
        "date": "2024-05-17",
        "nav": 251.67,
        "benchmarkNav": 239.09,
        "riskFreeNav": 100
      },
      {
        "date": "2024-06-14",
        "nav": 241.09,
        "benchmarkNav": 229.04,
        "riskFreeNav": 100
      },
      {
        "date": "2024-07-11",
        "nav": 240.68,
        "benchmarkNav": 228.65,
        "riskFreeNav": 100
      },
      {
        "date": "2024-08-05",
        "nav": 234.44,
        "benchmarkNav": 222.72,
        "riskFreeNav": 100
      },
      {
        "date": "2024-08-30",
        "nav": 246.63,
        "benchmarkNav": 234.3,
        "riskFreeNav": 100
      },
      {
        "date": "2024-09-25",
        "nav": 242.58,
        "benchmarkNav": 230.45,
        "riskFreeNav": 100
      },
      {
        "date": "2024-10-21",
        "nav": 247.57,
        "benchmarkNav": 235.19,
        "riskFreeNav": 100
      },
      {
        "date": "2024-11-14",
        "nav": 247.36,
        "benchmarkNav": 234.99,
        "riskFreeNav": 100
      },
      {
        "date": "2024-12-10",
        "nav": 248.59,
        "benchmarkNav": 236.16,
        "riskFreeNav": 100
      },
      {
        "date": "2025-01-10",
        "nav": 245.96,
        "benchmarkNav": 233.66,
        "riskFreeNav": 100
      },
      {
        "date": "2025-02-05",
        "nav": 245.48,
        "benchmarkNav": 233.21,
        "riskFreeNav": 100
      },
      {
        "date": "2025-03-03",
        "nav": 255.04,
        "benchmarkNav": 242.29,
        "riskFreeNav": 100
      },
      {
        "date": "2025-03-26",
        "nav": 255.28,
        "benchmarkNav": 242.52,
        "riskFreeNav": 100
      },
      {
        "date": "2025-04-22",
        "nav": 236.47,
        "benchmarkNav": 224.65,
        "riskFreeNav": 100
      },
      {
        "date": "2025-05-20",
        "nav": 245.73,
        "benchmarkNav": 233.44,
        "riskFreeNav": 100
      },
      {
        "date": "2025-06-17",
        "nav": 242.04,
        "benchmarkNav": 229.94,
        "riskFreeNav": 100
      },
      {
        "date": "2025-07-15",
        "nav": 241.05,
        "benchmarkNav": 229,
        "riskFreeNav": 100
      },
      {
        "date": "2025-08-07",
        "nav": 244.46,
        "benchmarkNav": 232.24,
        "riskFreeNav": 100
      },
      {
        "date": "2025-09-04",
        "nav": 242.61,
        "benchmarkNav": 230.48,
        "riskFreeNav": 100
      },
      {
        "date": "2025-09-29",
        "nav": 239.49,
        "benchmarkNav": 227.52,
        "riskFreeNav": 100
      },
      {
        "date": "2025-10-23",
        "nav": 246.97,
        "benchmarkNav": 234.62,
        "riskFreeNav": 100
      },
      {
        "date": "2025-11-18",
        "nav": 250.66,
        "benchmarkNav": 238.13,
        "riskFreeNav": 100
      },
      {
        "date": "2025-12-12",
        "nav": 250.5,
        "benchmarkNav": 237.97,
        "riskFreeNav": 100
      },
      {
        "date": "2026-01-13",
        "nav": 255.84,
        "benchmarkNav": 243.05,
        "riskFreeNav": 100
      },
      {
        "date": "2026-02-06",
        "nav": 274.7,
        "benchmarkNav": 260.97,
        "riskFreeNav": 100
      },
      {
        "date": "2026-03-04",
        "nav": 282.86,
        "benchmarkNav": 268.72,
        "riskFreeNav": 100
      },
      {
        "date": "2026-03-27",
        "nav": 290.88,
        "benchmarkNav": 276.34,
        "riskFreeNav": 100
      },
      {
        "date": "2026-04-23",
        "nav": 281.59,
        "benchmarkNav": 267.51,
        "riskFreeNav": 100
      },
      {
        "date": "2026-05-21",
        "nav": 288.4,
        "benchmarkNav": 273.98,
        "riskFreeNav": 100
      },
      {
        "date": "2026-06-17",
        "nav": 280.76,
        "benchmarkNav": 266.72,
        "riskFreeNav": 100
      },
      {
        "date": "2026-07-15",
        "nav": 288.39,
        "benchmarkNav": 273.97,
        "riskFreeNav": 100
      },
      {
        "date": "2026-08-10",
        "nav": 295.71,
        "benchmarkNav": 280.92,
        "riskFreeNav": 100
      },
      {
        "date": "2026-09-03",
        "nav": 298.9,
        "benchmarkNav": 283.95,
        "riskFreeNav": 100
      },
      {
        "date": "2026-09-24",
        "nav": 289.89,
        "benchmarkNav": 275.4,
        "riskFreeNav": 100
      }
    ],
    "isBlank": false,
    "isDisabled": false
  },
  {
    "id": "fund-8",
    "slotNumber": 8,
    "isin": "0P00000RNA.F",
    "name": "Vanguard Euro Govt Bd Idx Inv EUR Acc",
    "ticker": "0P00000RNA.F",
    "category": "EURO_BONDS",
    "categoryLabel": "Renta Fija Soberana / Bonos Euro (Refugio)",
    "isSafeHaven": true,
    "currentNAV": 196.8725,
    "currency": "EUR",
    "yahooUrl": "https://finance.yahoo.com/quote/0P00000RNA.F",
    "sharesHeld": 0,
    "purchasePriceAvg": 0,
    "lastUpdated": "2026-09-24",
    "lastDateFormatted": "24/09/26",
    "return1M": -2.5,
    "return3M": -4.19,
    "return6M": -1.61,
    "return12M": -2.44,
    "return12Minus1M": 0.32,
    "return3YAnnualized": 2.01,
    "score12M": -0.024369877412221852,
    "score12_1": 0.0031725639294484242,
    "scoreEquilibrado": -0.0253797487511786,
    "scoreProgresivo": -0.02822725105000369,
    "ytd": -0.029269947492390536,
    "ret3yAnnual": 0.02013135466432381,
    "ret5yAnnual": -0.029074404879917193,
    "periodReturns": {
      "1d": -0.0035566204665362644,
      "1w": -0.008764770536514921,
      "1m": -0.02503084036846992,
      "3m": -0.041888322788090515,
      "6m": -0.0160571516248319,
      "1y": -0.024369877412221852,
      "2y": -0.02386195113074785,
      "3y": 0.061618036977940216,
      "5y": -0.13716103420150827
    },
    "periodPrices": {
      "1d": 197.5752,
      "1w": 198.6133,
      "1m": 201.9269,
      "3m": 205.4797,
      "6m": 200.0853,
      "1y": 201.7901,
      "2y": 201.6851,
      "3y": 185.4457,
      "5y": 228.1683
    },
    "volatility1Y": 4.16,
    "sharpeRatio": -1.46,
    "jensenAlpha": -9.05,
    "sortinoRatio": -2.03,
    "beta": 0.25,
    "maxDrawdown": -20.67,
    "history": [
      {
        "date": "2021-09-27",
        "nav": 228.17,
        "benchmarkNav": 216.76,
        "riskFreeNav": 100
      },
      {
        "date": "2021-10-26",
        "nav": 226.96,
        "benchmarkNav": 215.61,
        "riskFreeNav": 100
      },
      {
        "date": "2021-11-24",
        "nav": 227.43,
        "benchmarkNav": 216.06,
        "riskFreeNav": 100
      },
      {
        "date": "2021-12-23",
        "nav": 227.39,
        "benchmarkNav": 216.02,
        "riskFreeNav": 100
      },
      {
        "date": "2022-01-27",
        "nav": 224.77,
        "benchmarkNav": 213.53,
        "riskFreeNav": 100
      },
      {
        "date": "2022-02-25",
        "nav": 218.46,
        "benchmarkNav": 207.54,
        "riskFreeNav": 100
      },
      {
        "date": "2022-03-28",
        "nav": 213.92,
        "benchmarkNav": 203.22,
        "riskFreeNav": 100
      },
      {
        "date": "2022-04-28",
        "nav": 206.9,
        "benchmarkNav": 196.56,
        "riskFreeNav": 100
      },
      {
        "date": "2022-05-27",
        "nav": 205.11,
        "benchmarkNav": 194.85,
        "riskFreeNav": 100
      },
      {
        "date": "2022-06-27",
        "nav": 196.66,
        "benchmarkNav": 186.83,
        "riskFreeNav": 100
      },
      {
        "date": "2022-07-26",
        "nav": 204.41,
        "benchmarkNav": 194.19,
        "riskFreeNav": 100
      },
      {
        "date": "2022-08-24",
        "nav": 198.72,
        "benchmarkNav": 188.78,
        "riskFreeNav": 100
      },
      {
        "date": "2022-09-23",
        "nav": 190.6,
        "benchmarkNav": 181.07,
        "riskFreeNav": 100
      },
      {
        "date": "2022-10-24",
        "nav": 186.56,
        "benchmarkNav": 177.23,
        "riskFreeNav": 100
      },
      {
        "date": "2022-11-22",
        "nav": 192.47,
        "benchmarkNav": 182.85,
        "riskFreeNav": 100
      },
      {
        "date": "2022-12-21",
        "nav": 188.17,
        "benchmarkNav": 178.76,
        "riskFreeNav": 100
      },
      {
        "date": "2023-01-24",
        "nav": 191.21,
        "benchmarkNav": 181.65,
        "riskFreeNav": 100
      },
      {
        "date": "2023-02-22",
        "nav": 186.37,
        "benchmarkNav": 177.05,
        "riskFreeNav": 100
      },
      {
        "date": "2023-03-23",
        "nav": 190.58,
        "benchmarkNav": 181.05,
        "riskFreeNav": 100
      },
      {
        "date": "2023-04-25",
        "nav": 188.49,
        "benchmarkNav": 179.07,
        "riskFreeNav": 100
      },
      {
        "date": "2023-05-25",
        "nav": 187.13,
        "benchmarkNav": 177.77,
        "riskFreeNav": 100
      },
      {
        "date": "2023-06-23",
        "nav": 190.02,
        "benchmarkNav": 180.52,
        "riskFreeNav": 100
      },
      {
        "date": "2023-07-24",
        "nav": 189.87,
        "benchmarkNav": 180.37,
        "riskFreeNav": 100
      },
      {
        "date": "2023-08-22",
        "nav": 187.34,
        "benchmarkNav": 177.97,
        "riskFreeNav": 100
      },
      {
        "date": "2023-09-20",
        "nav": 186.85,
        "benchmarkNav": 177.51,
        "riskFreeNav": 100
      },
      {
        "date": "2023-10-19",
        "nav": 183.8,
        "benchmarkNav": 174.61,
        "riskFreeNav": 100
      },
      {
        "date": "2023-11-17",
        "nav": 189.39,
        "benchmarkNav": 179.92,
        "riskFreeNav": 100
      },
      {
        "date": "2023-12-18",
        "nav": 197,
        "benchmarkNav": 187.15,
        "riskFreeNav": 100
      },
      {
        "date": "2024-01-19",
        "nav": 194.82,
        "benchmarkNav": 185.07,
        "riskFreeNav": 100
      },
      {
        "date": "2024-02-19",
        "nav": 194.39,
        "benchmarkNav": 184.67,
        "riskFreeNav": 100
      },
      {
        "date": "2024-03-19",
        "nav": 195.42,
        "benchmarkNav": 185.64,
        "riskFreeNav": 100
      },
      {
        "date": "2024-04-19",
        "nav": 194.39,
        "benchmarkNav": 184.67,
        "riskFreeNav": 100
      },
      {
        "date": "2024-05-21",
        "nav": 195.27,
        "benchmarkNav": 185.5,
        "riskFreeNav": 100
      },
      {
        "date": "2024-06-19",
        "nav": 195.27,
        "benchmarkNav": 185.5,
        "riskFreeNav": 100
      },
      {
        "date": "2024-07-18",
        "nav": 197.23,
        "benchmarkNav": 187.36,
        "riskFreeNav": 100
      },
      {
        "date": "2024-08-16",
        "nav": 199.39,
        "benchmarkNav": 189.42,
        "riskFreeNav": 100
      },
      {
        "date": "2024-09-16",
        "nav": 201.9,
        "benchmarkNav": 191.8,
        "riskFreeNav": 100
      },
      {
        "date": "2024-10-15",
        "nav": 201.47,
        "benchmarkNav": 191.39,
        "riskFreeNav": 100
      },
      {
        "date": "2024-11-13",
        "nav": 200.44,
        "benchmarkNav": 190.42,
        "riskFreeNav": 100
      },
      {
        "date": "2024-12-12",
        "nav": 203.84,
        "benchmarkNav": 193.65,
        "riskFreeNav": 100
      },
      {
        "date": "2025-01-17",
        "nav": 200.01,
        "benchmarkNav": 190.01,
        "riskFreeNav": 100
      },
      {
        "date": "2025-02-17",
        "nav": 201.57,
        "benchmarkNav": 191.49,
        "riskFreeNav": 100
      },
      {
        "date": "2025-03-18",
        "nav": 198.13,
        "benchmarkNav": 188.22,
        "riskFreeNav": 100
      },
      {
        "date": "2025-04-16",
        "nav": 201.86,
        "benchmarkNav": 191.77,
        "riskFreeNav": 100
      },
      {
        "date": "2025-05-20",
        "nav": 201.77,
        "benchmarkNav": 191.68,
        "riskFreeNav": 100
      },
      {
        "date": "2025-06-18",
        "nav": 203.3,
        "benchmarkNav": 193.13,
        "riskFreeNav": 100
      },
      {
        "date": "2025-07-17",
        "nav": 202.1,
        "benchmarkNav": 192,
        "riskFreeNav": 100
      },
      {
        "date": "2025-08-15",
        "nav": 201.36,
        "benchmarkNav": 191.29,
        "riskFreeNav": 100
      },
      {
        "date": "2025-09-15",
        "nav": 202.48,
        "benchmarkNav": 192.36,
        "riskFreeNav": 100
      },
      {
        "date": "2025-10-14",
        "nav": 204.08,
        "benchmarkNav": 193.88,
        "riskFreeNav": 100
      },
      {
        "date": "2025-11-12",
        "nav": 204.41,
        "benchmarkNav": 194.19,
        "riskFreeNav": 100
      },
      {
        "date": "2025-12-11",
        "nav": 202.46,
        "benchmarkNav": 192.33,
        "riskFreeNav": 100
      },
      {
        "date": "2026-01-16",
        "nav": 203.77,
        "benchmarkNav": 193.58,
        "riskFreeNav": 100
      },
      {
        "date": "2026-02-16",
        "nav": 205.59,
        "benchmarkNav": 195.31,
        "riskFreeNav": 100
      },
      {
        "date": "2026-03-17",
        "nav": 203.19,
        "benchmarkNav": 193.03,
        "riskFreeNav": 100
      },
      {
        "date": "2026-04-17",
        "nav": 203.39,
        "benchmarkNav": 193.22,
        "riskFreeNav": 100
      },
      {
        "date": "2026-05-19",
        "nav": 200.92,
        "benchmarkNav": 190.87,
        "riskFreeNav": 100
      },
      {
        "date": "2026-06-17",
        "nav": 204.6,
        "benchmarkNav": 194.37,
        "riskFreeNav": 100
      },
      {
        "date": "2026-07-16",
        "nav": 202.2,
        "benchmarkNav": 192.09,
        "riskFreeNav": 100
      },
      {
        "date": "2026-08-14",
        "nav": 202.05,
        "benchmarkNav": 191.95,
        "riskFreeNav": 100
      },
      {
        "date": "2026-09-15",
        "nav": 197.84,
        "benchmarkNav": 187.95,
        "riskFreeNav": 100
      },
      {
        "date": "2026-09-24",
        "nav": 196.87,
        "benchmarkNav": 187.03,
        "riskFreeNav": 100
      }
    ],
    "isBlank": false,
    "isDisabled": false
  },
  {
    "id": "fund-9",
    "slotNumber": 9,
    "isin": "0P00012I69.F",
    "name": "Vanguard Global Bd Idx EUR H Acc",
    "ticker": "0P00012I69.F",
    "category": "EURO_BONDS",
    "categoryLabel": "Renta Fija Soberana / Bonos Euro (Refugio)",
    "isSafeHaven": true,
    "currentNAV": 97.0109,
    "currency": "EUR",
    "yahooUrl": "https://finance.yahoo.com/quote/0P00012I69.F",
    "sharesHeld": 0,
    "purchasePriceAvg": 0,
    "lastUpdated": "2026-09-24",
    "lastDateFormatted": "24/09/26",
    "return1M": -2.35,
    "return3M": -3.45,
    "return6M": -1.76,
    "return12M": -2.88,
    "return12Minus1M": 0.16,
    "return3YAnnualized": 1.99,
    "score12M": -0.02878381354744397,
    "score12_1": 0.0015657562158908345,
    "scoreEquilibrado": -0.026568454479047474,
    "scoreProgresivo": -0.026121820268961895,
    "ytd": -0.032057255861382083,
    "ret3yAnnual": 0.019934317657237965,
    "ret5yAnnual": -0.02359752852659025,
    "periodReturns": {
      "1d": -0.004380234755130719,
      "1w": -0.01037459743603597,
      "1m": -0.023451640114917627,
      "3m": -0.034470506388200706,
      "6m": -0.017608154758951167,
      "1y": -0.02878381354744397,
      "2y": -0.024023428854271778,
      "3y": 0.06100300547284809,
      "5y": -0.11254906732068404
    },
    "periodPrices": {
      "1d": 97.4377,
      "1w": 98.0279,
      "1m": 99.3406,
      "3m": 100.4743,
      "6m": 98.7497,
      "1y": 99.886,
      "2y": 99.3988,
      "3y": 91.4332,
      "5y": 109.3141
    },
    "volatility1Y": 3.14,
    "sharpeRatio": -2.08,
    "jensenAlpha": -9.49,
    "sortinoRatio": -2.73,
    "beta": 0.25,
    "maxDrawdown": -18.14,
    "history": [
      {
        "date": "2021-09-27",
        "nav": 109.31,
        "benchmarkNav": 103.85,
        "riskFreeNav": 100
      },
      {
        "date": "2021-10-26",
        "nav": 108.52,
        "benchmarkNav": 103.09,
        "riskFreeNav": 100
      },
      {
        "date": "2021-11-24",
        "nav": 108.37,
        "benchmarkNav": 102.95,
        "riskFreeNav": 100
      },
      {
        "date": "2021-12-23",
        "nav": 108.72,
        "benchmarkNav": 103.28,
        "riskFreeNav": 100
      },
      {
        "date": "2022-01-27",
        "nav": 106.76,
        "benchmarkNav": 101.43,
        "riskFreeNav": 100
      },
      {
        "date": "2022-02-25",
        "nav": 104.43,
        "benchmarkNav": 99.2,
        "riskFreeNav": 100
      },
      {
        "date": "2022-03-28",
        "nav": 101.63,
        "benchmarkNav": 96.55,
        "riskFreeNav": 100
      },
      {
        "date": "2022-04-28",
        "nav": 99.17,
        "benchmarkNav": 94.21,
        "riskFreeNav": 100
      },
      {
        "date": "2022-05-27",
        "nav": 99.11,
        "benchmarkNav": 94.16,
        "riskFreeNav": 100
      },
      {
        "date": "2022-06-27",
        "nav": 95.82,
        "benchmarkNav": 91.03,
        "riskFreeNav": 100
      },
      {
        "date": "2022-07-26",
        "nav": 98.27,
        "benchmarkNav": 93.35,
        "riskFreeNav": 100
      },
      {
        "date": "2022-08-24",
        "nav": 96.45,
        "benchmarkNav": 91.62,
        "riskFreeNav": 100
      },
      {
        "date": "2022-09-23",
        "nav": 93,
        "benchmarkNav": 88.35,
        "riskFreeNav": 100
      },
      {
        "date": "2022-10-24",
        "nav": 90.29,
        "benchmarkNav": 85.77,
        "riskFreeNav": 100
      },
      {
        "date": "2022-11-22",
        "nav": 93.41,
        "benchmarkNav": 88.74,
        "riskFreeNav": 100
      },
      {
        "date": "2022-12-21",
        "nav": 93.38,
        "benchmarkNav": 88.71,
        "riskFreeNav": 100
      },
      {
        "date": "2023-01-24",
        "nav": 94.81,
        "benchmarkNav": 90.07,
        "riskFreeNav": 100
      },
      {
        "date": "2023-02-22",
        "nav": 92.62,
        "benchmarkNav": 87.98,
        "riskFreeNav": 100
      },
      {
        "date": "2023-03-23",
        "nav": 94.8,
        "benchmarkNav": 90.06,
        "riskFreeNav": 100
      },
      {
        "date": "2023-04-25",
        "nav": 94.73,
        "benchmarkNav": 90,
        "riskFreeNav": 100
      },
      {
        "date": "2023-05-25",
        "nav": 93.04,
        "benchmarkNav": 88.39,
        "riskFreeNav": 100
      },
      {
        "date": "2023-06-23",
        "nav": 93.89,
        "benchmarkNav": 89.2,
        "riskFreeNav": 100
      },
      {
        "date": "2023-07-24",
        "nav": 93.83,
        "benchmarkNav": 89.14,
        "riskFreeNav": 100
      },
      {
        "date": "2023-08-22",
        "nav": 91.98,
        "benchmarkNav": 87.38,
        "riskFreeNav": 100
      },
      {
        "date": "2023-09-20",
        "nav": 92.1,
        "benchmarkNav": 87.49,
        "riskFreeNav": 100
      },
      {
        "date": "2023-10-19",
        "nav": 89.79,
        "benchmarkNav": 85.3,
        "riskFreeNav": 100
      },
      {
        "date": "2023-11-17",
        "nav": 92.74,
        "benchmarkNav": 88.11,
        "riskFreeNav": 100
      },
      {
        "date": "2023-12-18",
        "nav": 96.02,
        "benchmarkNav": 91.22,
        "riskFreeNav": 100
      },
      {
        "date": "2024-01-19",
        "nav": 95.26,
        "benchmarkNav": 90.49,
        "riskFreeNav": 100
      },
      {
        "date": "2024-02-19",
        "nav": 94.89,
        "benchmarkNav": 90.15,
        "riskFreeNav": 100
      },
      {
        "date": "2024-03-19",
        "nav": 95.3,
        "benchmarkNav": 90.53,
        "riskFreeNav": 100
      },
      {
        "date": "2024-04-19",
        "nav": 94.22,
        "benchmarkNav": 89.51,
        "riskFreeNav": 100
      },
      {
        "date": "2024-05-21",
        "nav": 95.23,
        "benchmarkNav": 90.47,
        "riskFreeNav": 100
      },
      {
        "date": "2024-06-19",
        "nav": 96.04,
        "benchmarkNav": 91.23,
        "riskFreeNav": 100
      },
      {
        "date": "2024-07-18",
        "nav": 96.56,
        "benchmarkNav": 91.74,
        "riskFreeNav": 100
      },
      {
        "date": "2024-08-16",
        "nav": 98.29,
        "benchmarkNav": 93.37,
        "riskFreeNav": 100
      },
      {
        "date": "2024-09-16",
        "nav": 99.69,
        "benchmarkNav": 94.71,
        "riskFreeNav": 100
      },
      {
        "date": "2024-10-15",
        "nav": 98.61,
        "benchmarkNav": 93.68,
        "riskFreeNav": 100
      },
      {
        "date": "2024-11-13",
        "nav": 97.28,
        "benchmarkNav": 92.41,
        "riskFreeNav": 100
      },
      {
        "date": "2024-12-12",
        "nav": 98.33,
        "benchmarkNav": 93.41,
        "riskFreeNav": 100
      },
      {
        "date": "2025-01-17",
        "nav": 97.09,
        "benchmarkNav": 92.24,
        "riskFreeNav": 100
      },
      {
        "date": "2025-02-17",
        "nav": 97.92,
        "benchmarkNav": 93.02,
        "riskFreeNav": 100
      },
      {
        "date": "2025-03-18",
        "nav": 97.96,
        "benchmarkNav": 93.06,
        "riskFreeNav": 100
      },
      {
        "date": "2025-04-16",
        "nav": 98.34,
        "benchmarkNav": 93.43,
        "riskFreeNav": 100
      },
      {
        "date": "2025-05-20",
        "nav": 97.97,
        "benchmarkNav": 93.07,
        "riskFreeNav": 100
      },
      {
        "date": "2025-06-18",
        "nav": 98.75,
        "benchmarkNav": 93.81,
        "riskFreeNav": 100
      },
      {
        "date": "2025-07-17",
        "nav": 98.51,
        "benchmarkNav": 93.59,
        "riskFreeNav": 100
      },
      {
        "date": "2025-08-15",
        "nav": 99.1,
        "benchmarkNav": 94.14,
        "riskFreeNav": 100
      },
      {
        "date": "2025-09-15",
        "nav": 100.24,
        "benchmarkNav": 95.22,
        "riskFreeNav": 100
      },
      {
        "date": "2025-10-14",
        "nav": 100.58,
        "benchmarkNav": 95.56,
        "riskFreeNav": 100
      },
      {
        "date": "2025-11-12",
        "nav": 100.56,
        "benchmarkNav": 95.53,
        "riskFreeNav": 100
      },
      {
        "date": "2025-12-11",
        "nav": 100.05,
        "benchmarkNav": 95.05,
        "riskFreeNav": 100
      },
      {
        "date": "2026-01-16",
        "nav": 100.25,
        "benchmarkNav": 95.24,
        "riskFreeNav": 100
      },
      {
        "date": "2026-02-16",
        "nav": 101.13,
        "benchmarkNav": 96.07,
        "riskFreeNav": 100
      },
      {
        "date": "2026-03-17",
        "nav": 100,
        "benchmarkNav": 95,
        "riskFreeNav": 100
      },
      {
        "date": "2026-04-17",
        "nav": 100.22,
        "benchmarkNav": 95.21,
        "riskFreeNav": 100
      },
      {
        "date": "2026-05-19",
        "nav": 98.7,
        "benchmarkNav": 93.76,
        "riskFreeNav": 100
      },
      {
        "date": "2026-06-17",
        "nav": 99.99,
        "benchmarkNav": 94.99,
        "riskFreeNav": 100
      },
      {
        "date": "2026-07-16",
        "nav": 99.44,
        "benchmarkNav": 94.46,
        "riskFreeNav": 100
      },
      {
        "date": "2026-08-14",
        "nav": 99.11,
        "benchmarkNav": 94.16,
        "riskFreeNav": 100
      },
      {
        "date": "2026-09-15",
        "nav": 97.58,
        "benchmarkNav": 92.7,
        "riskFreeNav": 100
      },
      {
        "date": "2026-09-24",
        "nav": 97.01,
        "benchmarkNav": 92.16,
        "riskFreeNav": 100
      }
    ],
    "isBlank": false,
    "isDisabled": false
  },
  {
    "id": "fund-10",
    "slotNumber": 10,
    "isin": "0P0001A2G4.F",
    "name": "Ninety One GSF Glb Gold A Acc EUR H",
    "ticker": "0P0001A2G4.F",
    "category": "WORLD_EQUITY",
    "categoryLabel": "Renta Variable Global Desarrollada (MSCI World)",
    "isSafeHaven": false,
    "currentNAV": 69.12,
    "currency": "EUR",
    "yahooUrl": "https://finance.yahoo.com/quote/0P0001A2G4.F",
    "sharesHeld": 0,
    "purchasePriceAvg": 0,
    "lastUpdated": "2026-09-24",
    "lastDateFormatted": "24/09/26",
    "return1M": -10.85,
    "return3M": 20.21,
    "return6M": 11.21,
    "return12M": 31.06,
    "return12Minus1M": 80.85,
    "return3YAnnualized": 48.31,
    "score12M": 0.31058020477815695,
    "score12_1": 0.8084907860975041,
    "scoreEquilibrado": 0.2293519023820828,
    "scoreProgresivo": 0.07072405760959466,
    "ytd": 0.03164179104477616,
    "ret3yAnnual": 0.48305613891440524,
    "ret5yAnnual": 0.18380934521768477,
    "periodReturns": {
      "1d": -0.01059261379902654,
      "1w": -0.01355787070072767,
      "1m": -0.10847413904295111,
      "3m": 0.20208695652173914,
      "6m": 0.11214802896218834,
      "1y": 0.31058020477815695,
      "2y": 1.3875647668393785,
      "3y": 2.2619159981123174,
      "5y": 1.3249243188698285
    },
    "periodPrices": {
      "1d": 69.86,
      "1w": 70.07,
      "1m": 77.53,
      "3m": 57.5,
      "6m": 62.15,
      "1y": 52.74,
      "2y": 28.95,
      "3y": 21.19,
      "5y": 29.73
    },
    "volatility1Y": 47.9,
    "sharpeRatio": 0.57,
    "jensenAlpha": 10.82,
    "sortinoRatio": 0.8,
    "beta": 1.4,
    "maxDrawdown": -47.52,
    "history": [
      {
        "date": "2022-03-07",
        "nav": 29.73,
        "benchmarkNav": 28.24,
        "riskFreeNav": 100
      },
      {
        "date": "2022-03-31",
        "nav": 29.93,
        "benchmarkNav": 28.43,
        "riskFreeNav": 100
      },
      {
        "date": "2022-04-28",
        "nav": 27.57,
        "benchmarkNav": 26.19,
        "riskFreeNav": 100
      },
      {
        "date": "2022-05-27",
        "nav": 25.39,
        "benchmarkNav": 24.12,
        "riskFreeNav": 100
      },
      {
        "date": "2022-06-28",
        "nav": 22.14,
        "benchmarkNav": 21.03,
        "riskFreeNav": 100
      },
      {
        "date": "2022-07-22",
        "nav": 19.73,
        "benchmarkNav": 18.74,
        "riskFreeNav": 100
      },
      {
        "date": "2022-08-22",
        "nav": 19.62,
        "benchmarkNav": 18.64,
        "riskFreeNav": 100
      },
      {
        "date": "2022-09-16",
        "nav": 18.38,
        "benchmarkNav": 17.46,
        "riskFreeNav": 100
      },
      {
        "date": "2022-10-13",
        "nav": 18.13,
        "benchmarkNav": 17.22,
        "riskFreeNav": 100
      },
      {
        "date": "2022-11-09",
        "nav": 19.6,
        "benchmarkNav": 18.62,
        "riskFreeNav": 100
      },
      {
        "date": "2022-12-05",
        "nav": 21.69,
        "benchmarkNav": 20.61,
        "riskFreeNav": 100
      },
      {
        "date": "2023-01-03",
        "nav": 22.62,
        "benchmarkNav": 21.49,
        "riskFreeNav": 100
      },
      {
        "date": "2023-01-30",
        "nav": 24.6,
        "benchmarkNav": 23.37,
        "riskFreeNav": 100
      },
      {
        "date": "2023-02-23",
        "nav": 21.11,
        "benchmarkNav": 20.05,
        "riskFreeNav": 100
      },
      {
        "date": "2023-03-22",
        "nav": 23.17,
        "benchmarkNav": 22.01,
        "riskFreeNav": 100
      },
      {
        "date": "2023-04-20",
        "nav": 25.7,
        "benchmarkNav": 24.42,
        "riskFreeNav": 100
      },
      {
        "date": "2023-05-22",
        "nav": 23.94,
        "benchmarkNav": 22.74,
        "riskFreeNav": 100
      },
      {
        "date": "2023-06-16",
        "nav": 23.41,
        "benchmarkNav": 22.24,
        "riskFreeNav": 100
      },
      {
        "date": "2023-07-13",
        "nav": 24.19,
        "benchmarkNav": 22.98,
        "riskFreeNav": 100
      },
      {
        "date": "2023-08-08",
        "nav": 21.83,
        "benchmarkNav": 20.74,
        "riskFreeNav": 100
      },
      {
        "date": "2023-09-05",
        "nav": 21.26,
        "benchmarkNav": 20.2,
        "riskFreeNav": 100
      },
      {
        "date": "2023-09-29",
        "nav": 20,
        "benchmarkNav": 19,
        "riskFreeNav": 100
      },
      {
        "date": "2023-10-26",
        "nav": 20.84,
        "benchmarkNav": 19.8,
        "riskFreeNav": 100
      },
      {
        "date": "2023-11-22",
        "nav": 21.39,
        "benchmarkNav": 20.32,
        "riskFreeNav": 100
      },
      {
        "date": "2023-12-18",
        "nav": 22.75,
        "benchmarkNav": 21.61,
        "riskFreeNav": 100
      },
      {
        "date": "2024-01-23",
        "nav": 20.48,
        "benchmarkNav": 19.46,
        "riskFreeNav": 100
      },
      {
        "date": "2024-02-19",
        "nav": 19.27,
        "benchmarkNav": 18.31,
        "riskFreeNav": 100
      },
      {
        "date": "2024-03-14",
        "nav": 21.61,
        "benchmarkNav": 20.53,
        "riskFreeNav": 100
      },
      {
        "date": "2024-04-11",
        "nav": 24.77,
        "benchmarkNav": 23.53,
        "riskFreeNav": 100
      },
      {
        "date": "2024-05-10",
        "nav": 24.81,
        "benchmarkNav": 23.57,
        "riskFreeNav": 100
      },
      {
        "date": "2024-06-07",
        "nav": 24.24,
        "benchmarkNav": 23.03,
        "riskFreeNav": 100
      },
      {
        "date": "2024-07-03",
        "nav": 24.58,
        "benchmarkNav": 23.35,
        "riskFreeNav": 100
      },
      {
        "date": "2024-07-29",
        "nav": 25.36,
        "benchmarkNav": 24.09,
        "riskFreeNav": 100
      },
      {
        "date": "2024-08-23",
        "nav": 27.51,
        "benchmarkNav": 26.13,
        "riskFreeNav": 100
      },
      {
        "date": "2024-09-19",
        "nav": 28.04,
        "benchmarkNav": 26.64,
        "riskFreeNav": 100
      },
      {
        "date": "2024-10-15",
        "nav": 28.74,
        "benchmarkNav": 27.3,
        "riskFreeNav": 100
      },
      {
        "date": "2024-11-11",
        "nav": 26.61,
        "benchmarkNav": 25.28,
        "riskFreeNav": 100
      },
      {
        "date": "2024-12-05",
        "nav": 27.04,
        "benchmarkNav": 25.69,
        "riskFreeNav": 100
      },
      {
        "date": "2025-01-07",
        "nav": 25.05,
        "benchmarkNav": 23.8,
        "riskFreeNav": 100
      },
      {
        "date": "2025-01-31",
        "nav": 27.68,
        "benchmarkNav": 26.3,
        "riskFreeNav": 100
      },
      {
        "date": "2025-02-27",
        "nav": 28.04,
        "benchmarkNav": 26.64,
        "riskFreeNav": 100
      },
      {
        "date": "2025-03-25",
        "nav": 31.92,
        "benchmarkNav": 30.32,
        "riskFreeNav": 100
      },
      {
        "date": "2025-04-22",
        "nav": 36.78,
        "benchmarkNav": 34.94,
        "riskFreeNav": 100
      },
      {
        "date": "2025-05-21",
        "nav": 35.47,
        "benchmarkNav": 33.7,
        "riskFreeNav": 100
      },
      {
        "date": "2025-06-19",
        "nav": 37.9,
        "benchmarkNav": 36.01,
        "riskFreeNav": 100
      },
      {
        "date": "2025-07-16",
        "nav": 36.77,
        "benchmarkNav": 34.93,
        "riskFreeNav": 100
      },
      {
        "date": "2025-08-11",
        "nav": 40.42,
        "benchmarkNav": 38.4,
        "riskFreeNav": 100
      },
      {
        "date": "2025-09-09",
        "nav": 47.57,
        "benchmarkNav": 45.19,
        "riskFreeNav": 100
      },
      {
        "date": "2025-10-03",
        "nav": 55.77,
        "benchmarkNav": 52.98,
        "riskFreeNav": 100
      },
      {
        "date": "2025-10-30",
        "nav": 53,
        "benchmarkNav": 50.35,
        "riskFreeNav": 100
      },
      {
        "date": "2025-11-25",
        "nav": 58.38,
        "benchmarkNav": 55.46,
        "riskFreeNav": 100
      },
      {
        "date": "2025-12-19",
        "nav": 66.69,
        "benchmarkNav": 63.36,
        "riskFreeNav": 100
      },
      {
        "date": "2026-01-21",
        "nav": 77.16,
        "benchmarkNav": 73.3,
        "riskFreeNav": 100
      },
      {
        "date": "2026-02-17",
        "nav": 75.54,
        "benchmarkNav": 71.76,
        "riskFreeNav": 100
      },
      {
        "date": "2026-03-13",
        "nav": 68.34,
        "benchmarkNav": 64.92,
        "riskFreeNav": 100
      },
      {
        "date": "2026-04-10",
        "nav": 72.89,
        "benchmarkNav": 69.25,
        "riskFreeNav": 100
      },
      {
        "date": "2026-05-08",
        "nav": 70.13,
        "benchmarkNav": 66.62,
        "riskFreeNav": 100
      },
      {
        "date": "2026-06-05",
        "nav": 58.44,
        "benchmarkNav": 55.52,
        "riskFreeNav": 100
      },
      {
        "date": "2026-07-02",
        "nav": 58.54,
        "benchmarkNav": 55.61,
        "riskFreeNav": 100
      },
      {
        "date": "2026-07-29",
        "nav": 55.61,
        "benchmarkNav": 52.83,
        "riskFreeNav": 100
      },
      {
        "date": "2026-08-25",
        "nav": 77.53,
        "benchmarkNav": 73.65,
        "riskFreeNav": 100
      },
      {
        "date": "2026-09-23",
        "nav": 69.86,
        "benchmarkNav": 66.37,
        "riskFreeNav": 100
      },
      {
        "date": "2026-09-24",
        "nav": 69.12,
        "benchmarkNav": 65.66,
        "riskFreeNav": 100
      }
    ],
    "isBlank": false,
    "isDisabled": false
  },
  {
    "id": "fund-11",
    "slotNumber": 11,
    "isin": "0P00000LRT.F",
    "name": "Groupama Trésorerie IC",
    "ticker": "0P00000LRT.F",
    "category": "MONEY_MARKET_CASH",
    "categoryLabel": "Fondo Monetario Euro (€STR - Tasa Libre Riesgo)",
    "isSafeHaven": true,
    "currentNAV": 44595.0586,
    "currency": "EUR",
    "yahooUrl": "https://finance.yahoo.com/quote/0P00000LRT.F",
    "sharesHeld": 0,
    "purchasePriceAvg": 0,
    "lastUpdated": "2026-09-24",
    "lastDateFormatted": "24/09/26",
    "return1M": 0.19,
    "return3M": 0.58,
    "return6M": 1.13,
    "return12M": 2.18,
    "return12Minus1M": 2.16,
    "return3YAnnualized": 3.02,
    "score12M": 0.02177088569749497,
    "score12_1": 0.02163607927283273,
    "scoreEquilibrado": 0.015414636964436967,
    "scoreProgresivo": 0.006905091021036425,
    "ytd": 0.016115405093395152,
    "ret3yAnnual": 0.03018520575659589,
    "ret5yAnnual": 0.02228910140312501,
    "periodReturns": {
      "1d": 0.00008006684988792756,
      "1w": 0.0005298729244145317,
      "1m": 0.00186756450597092,
      "3m": 0.005769083430633426,
      "6m": 0.01125125809854266,
      "1y": 0.02177088569749497,
      "2y": 0.04987997576947523,
      "3y": 0.09331656035849312,
      "5y": 0.11652552015831152
    },
    "periodPrices": {
      "1d": 44591.4883,
      "1w": 44571.4414,
      "1m": 44511.9297,
      "3m": 44339.2617,
      "6m": 44098.8906,
      "1y": 43644.8711,
      "2y": 42476.3398,
      "3y": 40788.7891,
      "5y": 39940.9219
    },
    "volatility1Y": 0.5,
    "sharpeRatio": -2.95,
    "jensenAlpha": -1.71,
    "sortinoRatio": -2.95,
    "beta": 0.02,
    "maxDrawdown": -0.54,
    "history": [
      {
        "date": "2021-09-27",
        "nav": 39940.92,
        "benchmarkNav": 37943.88,
        "riskFreeNav": 100
      },
      {
        "date": "2021-10-25",
        "nav": 39924.71,
        "benchmarkNav": 37928.48,
        "riskFreeNav": 100
      },
      {
        "date": "2021-11-23",
        "nav": 39909.22,
        "benchmarkNav": 37913.76,
        "riskFreeNav": 100
      },
      {
        "date": "2021-12-21",
        "nav": 39892.82,
        "benchmarkNav": 37898.18,
        "riskFreeNav": 100
      },
      {
        "date": "2022-01-18",
        "nav": 39874.44,
        "benchmarkNav": 37880.72,
        "riskFreeNav": 100
      },
      {
        "date": "2022-02-15",
        "nav": 39849.54,
        "benchmarkNav": 37857.06,
        "riskFreeNav": 100
      },
      {
        "date": "2022-03-15",
        "nav": 39825.24,
        "benchmarkNav": 37833.98,
        "riskFreeNav": 100
      },
      {
        "date": "2022-04-12",
        "nav": 39814.27,
        "benchmarkNav": 37823.56,
        "riskFreeNav": 100
      },
      {
        "date": "2022-05-12",
        "nav": 39793.34,
        "benchmarkNav": 37803.67,
        "riskFreeNav": 100
      },
      {
        "date": "2022-06-13",
        "nav": 39772.11,
        "benchmarkNav": 37783.5,
        "riskFreeNav": 100
      },
      {
        "date": "2022-07-11",
        "nav": 39750.75,
        "benchmarkNav": 37763.21,
        "riskFreeNav": 100
      },
      {
        "date": "2022-08-09",
        "nav": 39745.29,
        "benchmarkNav": 37758.02,
        "riskFreeNav": 100
      },
      {
        "date": "2022-09-06",
        "nav": 39744.97,
        "benchmarkNav": 37757.72,
        "riskFreeNav": 100
      },
      {
        "date": "2022-10-04",
        "nav": 39744.67,
        "benchmarkNav": 37757.44,
        "riskFreeNav": 100
      },
      {
        "date": "2022-11-02",
        "nav": 39767.96,
        "benchmarkNav": 37779.56,
        "riskFreeNav": 100
      },
      {
        "date": "2022-12-01",
        "nav": 39819.85,
        "benchmarkNav": 37828.86,
        "riskFreeNav": 100
      },
      {
        "date": "2023-01-02",
        "nav": 39878.94,
        "benchmarkNav": 37884.99,
        "riskFreeNav": 100
      },
      {
        "date": "2023-01-30",
        "nav": 39947.81,
        "benchmarkNav": 37950.42,
        "riskFreeNav": 100
      },
      {
        "date": "2023-02-27",
        "nav": 40020.84,
        "benchmarkNav": 38019.8,
        "riskFreeNav": 100
      },
      {
        "date": "2023-03-27",
        "nav": 40078.89,
        "benchmarkNav": 38074.95,
        "riskFreeNav": 100
      },
      {
        "date": "2023-04-26",
        "nav": 40183.07,
        "benchmarkNav": 38173.92,
        "riskFreeNav": 100
      },
      {
        "date": "2023-05-29",
        "nav": 40301.93,
        "benchmarkNav": 38286.83,
        "riskFreeNav": 100
      },
      {
        "date": "2023-06-26",
        "nav": 40404.16,
        "benchmarkNav": 38383.95,
        "riskFreeNav": 100
      },
      {
        "date": "2023-07-25",
        "nav": 40522.5,
        "benchmarkNav": 38496.38,
        "riskFreeNav": 100
      },
      {
        "date": "2023-08-23",
        "nav": 40645.45,
        "benchmarkNav": 38613.18,
        "riskFreeNav": 100
      },
      {
        "date": "2023-09-20",
        "nav": 40767.99,
        "benchmarkNav": 38729.59,
        "riskFreeNav": 100
      },
      {
        "date": "2023-10-18",
        "nav": 40896.57,
        "benchmarkNav": 38851.74,
        "riskFreeNav": 100
      },
      {
        "date": "2023-11-16",
        "nav": 41028.56,
        "benchmarkNav": 38977.13,
        "riskFreeNav": 100
      },
      {
        "date": "2023-12-14",
        "nav": 41159.18,
        "benchmarkNav": 39101.22,
        "riskFreeNav": 100
      },
      {
        "date": "2024-01-17",
        "nav": 41324.46,
        "benchmarkNav": 39258.24,
        "riskFreeNav": 100
      },
      {
        "date": "2024-02-14",
        "nav": 41460.41,
        "benchmarkNav": 39387.39,
        "riskFreeNav": 100
      },
      {
        "date": "2024-03-13",
        "nav": 41592.83,
        "benchmarkNav": 39513.19,
        "riskFreeNav": 100
      },
      {
        "date": "2024-04-15",
        "nav": 41746.4,
        "benchmarkNav": 39659.08,
        "riskFreeNav": 100
      },
      {
        "date": "2024-05-20",
        "nav": 41910.92,
        "benchmarkNav": 39815.38,
        "riskFreeNav": 100
      },
      {
        "date": "2024-06-17",
        "nav": 42041.64,
        "benchmarkNav": 39939.56,
        "riskFreeNav": 100
      },
      {
        "date": "2024-07-15",
        "nav": 42164.33,
        "benchmarkNav": 40056.11,
        "riskFreeNav": 100
      },
      {
        "date": "2024-08-12",
        "nav": 42289.62,
        "benchmarkNav": 40175.14,
        "riskFreeNav": 100
      },
      {
        "date": "2024-09-10",
        "nav": 42416.6,
        "benchmarkNav": 40295.77,
        "riskFreeNav": 100
      },
      {
        "date": "2024-10-08",
        "nav": 42540.53,
        "benchmarkNav": 40413.5,
        "riskFreeNav": 100
      },
      {
        "date": "2024-11-06",
        "nav": 42658.14,
        "benchmarkNav": 40525.23,
        "riskFreeNav": 100
      },
      {
        "date": "2024-12-04",
        "nav": 42767.2,
        "benchmarkNav": 40628.84,
        "riskFreeNav": 100
      },
      {
        "date": "2025-01-09",
        "nav": 42901.19,
        "benchmarkNav": 40756.13,
        "riskFreeNav": 100
      },
      {
        "date": "2025-02-06",
        "nav": 43004.43,
        "benchmarkNav": 40854.21,
        "riskFreeNav": 100
      },
      {
        "date": "2025-03-06",
        "nav": 43099.74,
        "benchmarkNav": 40944.75,
        "riskFreeNav": 100
      },
      {
        "date": "2025-04-03",
        "nav": 43186.82,
        "benchmarkNav": 41027.48,
        "riskFreeNav": 100
      },
      {
        "date": "2025-05-12",
        "nav": 43297.5,
        "benchmarkNav": 41132.63,
        "riskFreeNav": 100
      },
      {
        "date": "2025-06-10",
        "nav": 43381.55,
        "benchmarkNav": 41212.47,
        "riskFreeNav": 100
      },
      {
        "date": "2025-07-08",
        "nav": 43452.52,
        "benchmarkNav": 41279.89,
        "riskFreeNav": 100
      },
      {
        "date": "2025-08-05",
        "nav": 43520.19,
        "benchmarkNav": 41344.18,
        "riskFreeNav": 100
      },
      {
        "date": "2025-09-03",
        "nav": 43591.83,
        "benchmarkNav": 41412.24,
        "riskFreeNav": 100
      },
      {
        "date": "2025-10-01",
        "nav": 43661.78,
        "benchmarkNav": 41478.69,
        "riskFreeNav": 100
      },
      {
        "date": "2025-10-29",
        "nav": 43733.01,
        "benchmarkNav": 41546.36,
        "riskFreeNav": 100
      },
      {
        "date": "2025-11-27",
        "nav": 43804.39,
        "benchmarkNav": 41614.17,
        "riskFreeNav": 100
      },
      {
        "date": "2025-12-30",
        "nav": 43887.79,
        "benchmarkNav": 41693.4,
        "riskFreeNav": 100
      },
      {
        "date": "2026-01-29",
        "nav": 43964.99,
        "benchmarkNav": 41766.74,
        "riskFreeNav": 100
      },
      {
        "date": "2026-02-26",
        "nav": 44035.45,
        "benchmarkNav": 41833.68,
        "riskFreeNav": 100
      },
      {
        "date": "2026-03-26",
        "nav": 44098.89,
        "benchmarkNav": 41893.95,
        "riskFreeNav": 100
      },
      {
        "date": "2026-04-28",
        "nav": 44184.48,
        "benchmarkNav": 41975.26,
        "riskFreeNav": 100
      },
      {
        "date": "2026-06-01",
        "nav": 44274.15,
        "benchmarkNav": 42060.44,
        "riskFreeNav": 100
      },
      {
        "date": "2026-06-29",
        "nav": 44350.35,
        "benchmarkNav": 42132.83,
        "riskFreeNav": 100
      },
      {
        "date": "2026-07-28",
        "nav": 44431.58,
        "benchmarkNav": 42210,
        "riskFreeNav": 100
      },
      {
        "date": "2026-08-25",
        "nav": 44511.93,
        "benchmarkNav": 42286.33,
        "riskFreeNav": 100
      },
      {
        "date": "2026-09-22",
        "nav": 44587.81,
        "benchmarkNav": 42358.42,
        "riskFreeNav": 100
      },
      {
        "date": "2026-09-24",
        "nav": 44595.06,
        "benchmarkNav": 42365.31,
        "riskFreeNav": 100
      }
    ],
    "isBlank": false,
    "isDisabled": false
  },
  {
    "id": "fund-12",
    "slotNumber": 12,
    "isin": "0P0001MRGW.F",
    "name": "Myinvestor Nasdaq 100 FI",
    "ticker": "0P0001MRGW.F",
    "category": "US_EQUITY",
    "categoryLabel": "Renta Variable EE.UU. (S&P 500 / Nasdaq / Sectores)",
    "isSafeHaven": false,
    "currentNAV": 1.7685,
    "currency": "EUR",
    "yahooUrl": "https://finance.yahoo.com/quote/0P0001MRGW.F",
    "sharesHeld": 1000,
    "purchasePriceAvg": 1.5,
    "lastUpdated": "2026-09-23",
    "lastDateFormatted": "23/09/26",
    "return1M": 7.39,
    "return3M": 3.48,
    "return6M": 31.84,
    "return12M": 27.14,
    "return12Minus1M": 22.1,
    "return3YAnnualized": 23.66,
    "score12M": 0.2713874910136591,
    "score12_1": 0.22102765626158516,
    "scoreEquilibrado": 0.2381764882252613,
    "scoreProgresivo": 0.13082355067958165,
    "ytd": 0.2279544507707263,
    "ret3yAnnual": 0.23661218636585968,
    "ret5yAnnual": 0.11042749451001321,
    "periodReturns": {
      "1d": -0.00011307740148125411,
      "1w": 0.054561717352414885,
      "1m": 0.07390089871265482,
      "3m": 0.03481568168519589,
      "6m": 0.3183986879379752,
      "1y": 0.2713874910136591,
      "2y": 0.473872822735228,
      "3y": 0.8910393498716851,
      "5y": 0.688305489260143
    },
    "periodPrices": {
      "1d": 1.7687,
      "1w": 1.677,
      "1m": 1.6468,
      "3m": 1.709,
      "6m": 1.3414,
      "1y": 1.391,
      "2y": 1.1999,
      "3y": 0.9352,
      "5y": 1.0475
    },
    "volatility1Y": 17.04,
    "sharpeRatio": 1.38,
    "jensenAlpha": 9.51,
    "sortinoRatio": 2.1,
    "beta": 1.18,
    "maxDrawdown": -39.36,
    "history": [
      {
        "date": "2021-09-27",
        "nav": 1.05,
        "benchmarkNav": 1,
        "riskFreeNav": 100
      },
      {
        "date": "2021-10-26",
        "nav": 1.07,
        "benchmarkNav": 1.02,
        "riskFreeNav": 100
      },
      {
        "date": "2021-11-24",
        "nav": 1.13,
        "benchmarkNav": 1.07,
        "riskFreeNav": 100
      },
      {
        "date": "2021-12-23",
        "nav": 1.13,
        "benchmarkNav": 1.07,
        "riskFreeNav": 100
      },
      {
        "date": "2022-01-25",
        "nav": 0.97,
        "benchmarkNav": 0.92,
        "riskFreeNav": 100
      },
      {
        "date": "2022-02-23",
        "nav": 0.93,
        "benchmarkNav": 0.89,
        "riskFreeNav": 100
      },
      {
        "date": "2022-03-24",
        "nav": 1,
        "benchmarkNav": 0.95,
        "riskFreeNav": 100
      },
      {
        "date": "2022-04-26",
        "nav": 0.9,
        "benchmarkNav": 0.85,
        "riskFreeNav": 100
      },
      {
        "date": "2022-05-25",
        "nav": 0.81,
        "benchmarkNav": 0.77,
        "riskFreeNav": 100
      },
      {
        "date": "2022-06-23",
        "nav": 0.8,
        "benchmarkNav": 0.76,
        "riskFreeNav": 100
      },
      {
        "date": "2022-07-22",
        "nav": 0.89,
        "benchmarkNav": 0.84,
        "riskFreeNav": 100
      },
      {
        "date": "2022-08-22",
        "nav": 0.94,
        "benchmarkNav": 0.89,
        "riskFreeNav": 100
      },
      {
        "date": "2022-09-20",
        "nav": 0.85,
        "benchmarkNav": 0.8,
        "riskFreeNav": 100
      },
      {
        "date": "2022-10-19",
        "nav": 0.79,
        "benchmarkNav": 0.75,
        "riskFreeNav": 100
      },
      {
        "date": "2022-11-17",
        "nav": 0.77,
        "benchmarkNav": 0.73,
        "riskFreeNav": 100
      },
      {
        "date": "2022-12-16",
        "nav": 0.73,
        "benchmarkNav": 0.69,
        "riskFreeNav": 100
      },
      {
        "date": "2023-01-17",
        "nav": 0.74,
        "benchmarkNav": 0.7,
        "riskFreeNav": 100
      },
      {
        "date": "2023-02-15",
        "nav": 0.81,
        "benchmarkNav": 0.77,
        "riskFreeNav": 100
      },
      {
        "date": "2023-03-16",
        "nav": 0.81,
        "benchmarkNav": 0.77,
        "riskFreeNav": 100
      },
      {
        "date": "2023-04-18",
        "nav": 0.82,
        "benchmarkNav": 0.78,
        "riskFreeNav": 100
      },
      {
        "date": "2023-05-18",
        "nav": 0.87,
        "benchmarkNav": 0.83,
        "riskFreeNav": 100
      },
      {
        "date": "2023-06-16",
        "nav": 0.94,
        "benchmarkNav": 0.9,
        "riskFreeNav": 100
      },
      {
        "date": "2023-07-17",
        "nav": 0.95,
        "benchmarkNav": 0.9,
        "riskFreeNav": 100
      },
      {
        "date": "2023-08-15",
        "nav": 0.94,
        "benchmarkNav": 0.89,
        "riskFreeNav": 100
      },
      {
        "date": "2023-09-13",
        "nav": 0.97,
        "benchmarkNav": 0.92,
        "riskFreeNav": 100
      },
      {
        "date": "2023-10-12",
        "nav": 0.97,
        "benchmarkNav": 0.92,
        "riskFreeNav": 100
      },
      {
        "date": "2023-11-10",
        "nav": 0.97,
        "benchmarkNav": 0.92,
        "riskFreeNav": 100
      },
      {
        "date": "2023-12-11",
        "nav": 1.01,
        "benchmarkNav": 0.96,
        "riskFreeNav": 100
      },
      {
        "date": "2024-01-12",
        "nav": 1.04,
        "benchmarkNav": 0.98,
        "riskFreeNav": 100
      },
      {
        "date": "2024-02-12",
        "nav": 1.12,
        "benchmarkNav": 1.07,
        "riskFreeNav": 100
      },
      {
        "date": "2024-03-12",
        "nav": 1.12,
        "benchmarkNav": 1.06,
        "riskFreeNav": 100
      },
      {
        "date": "2024-04-12",
        "nav": 1.14,
        "benchmarkNav": 1.09,
        "riskFreeNav": 100
      },
      {
        "date": "2024-05-14",
        "nav": 1.14,
        "benchmarkNav": 1.08,
        "riskFreeNav": 100
      },
      {
        "date": "2024-06-12",
        "nav": 1.21,
        "benchmarkNav": 1.15,
        "riskFreeNav": 100
      },
      {
        "date": "2024-07-11",
        "nav": 1.26,
        "benchmarkNav": 1.19,
        "riskFreeNav": 100
      },
      {
        "date": "2024-08-09",
        "nav": 1.14,
        "benchmarkNav": 1.08,
        "riskFreeNav": 100
      },
      {
        "date": "2024-09-09",
        "nav": 1.13,
        "benchmarkNav": 1.08,
        "riskFreeNav": 100
      },
      {
        "date": "2024-10-09",
        "nav": 1.24,
        "benchmarkNav": 1.18,
        "riskFreeNav": 100
      },
      {
        "date": "2024-11-08",
        "nav": 1.32,
        "benchmarkNav": 1.25,
        "riskFreeNav": 100
      },
      {
        "date": "2024-12-09",
        "nav": 1.36,
        "benchmarkNav": 1.29,
        "riskFreeNav": 100
      },
      {
        "date": "2025-01-16",
        "nav": 1.37,
        "benchmarkNav": 1.31,
        "riskFreeNav": 100
      },
      {
        "date": "2025-02-14",
        "nav": 1.4,
        "benchmarkNav": 1.33,
        "riskFreeNav": 100
      },
      {
        "date": "2025-03-17",
        "nav": 1.21,
        "benchmarkNav": 1.15,
        "riskFreeNav": 100
      },
      {
        "date": "2025-04-15",
        "nav": 1.12,
        "benchmarkNav": 1.06,
        "riskFreeNav": 100
      },
      {
        "date": "2025-05-20",
        "nav": 1.26,
        "benchmarkNav": 1.2,
        "riskFreeNav": 100
      },
      {
        "date": "2025-06-19",
        "nav": 1.25,
        "benchmarkNav": 1.19,
        "riskFreeNav": 100
      },
      {
        "date": "2025-07-21",
        "nav": 1.32,
        "benchmarkNav": 1.26,
        "riskFreeNav": 100
      },
      {
        "date": "2025-08-19",
        "nav": 1.34,
        "benchmarkNav": 1.28,
        "riskFreeNav": 100
      },
      {
        "date": "2025-09-17",
        "nav": 1.36,
        "benchmarkNav": 1.3,
        "riskFreeNav": 100
      },
      {
        "date": "2025-10-17",
        "nav": 1.41,
        "benchmarkNav": 1.34,
        "riskFreeNav": 100
      },
      {
        "date": "2025-11-18",
        "nav": 1.41,
        "benchmarkNav": 1.34,
        "riskFreeNav": 100
      },
      {
        "date": "2025-12-17",
        "nav": 1.4,
        "benchmarkNav": 1.33,
        "riskFreeNav": 100
      },
      {
        "date": "2026-01-26",
        "nav": 1.44,
        "benchmarkNav": 1.37,
        "riskFreeNav": 100
      },
      {
        "date": "2026-02-24",
        "nav": 1.41,
        "benchmarkNav": 1.34,
        "riskFreeNav": 100
      },
      {
        "date": "2026-03-25",
        "nav": 1.39,
        "benchmarkNav": 1.32,
        "riskFreeNav": 100
      },
      {
        "date": "2026-04-27",
        "nav": 1.54,
        "benchmarkNav": 1.46,
        "riskFreeNav": 100
      },
      {
        "date": "2026-05-27",
        "nav": 1.7,
        "benchmarkNav": 1.62,
        "riskFreeNav": 100
      },
      {
        "date": "2026-06-25",
        "nav": 1.71,
        "benchmarkNav": 1.62,
        "riskFreeNav": 100
      },
      {
        "date": "2026-07-24",
        "nav": 1.64,
        "benchmarkNav": 1.56,
        "riskFreeNav": 100
      },
      {
        "date": "2026-08-25",
        "nav": 1.65,
        "benchmarkNav": 1.57,
        "riskFreeNav": 100
      },
      {
        "date": "2026-09-23",
        "nav": 1.77,
        "benchmarkNav": 1.68,
        "riskFreeNav": 100
      }
    ],
    "isBlank": false,
    "isDisabled": false
  }
];
