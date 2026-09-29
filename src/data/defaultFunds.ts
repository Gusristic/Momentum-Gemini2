import { FundISIN, HistoricalDataPoint } from '../types';

export const benchReturns = [
  0.025,
  0.018,
  -0.012,
  0.024,
  -0.038,
  -0.025,
  0.012,
  -0.054,
  -0.008,
  -0.062,
  0.051,
  -0.034,
  -0.068,
  0.042,
  0.031,
  -0.052,
  0.052,
  -0.018,
  0.024,
  0.011,
  -0.005,
  0.041,
  0.028,
  -0.021,
  -0.034,
  -0.022,
  0.068,
  0.045,
  0.018,
  0.034,
  0.025,
  -0.028,
  0.039,
  0.022,
  0.011,
  0.018,
  0.014,
  -0.012,
  0.042,
  -0.008,
  0.019,
  0.014,
  -0.008,
  0.017,
  0.021,
  0.009,
  -0.014,
  0.022,
  0.01,
  0.008,
  0.015,
  0.011,
  0.012,
  0.008,
  0.014,
  -0.005,
  0.011,
  0.007,
  -0.003,
  0.006
];

/**
 * 12 Slots Fijos Oficiales del Sistema Dual Momentum
 * Datos puros rescatados directamente de Yahoo Finance API (/v8/finance/chart)
 * Actualizado automáticamente en build / despliegue
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
    "currentNAV": 82.9711,
    "currency": "EUR",
    "yahooUrl": "https://finance.yahoo.com/quote/0P00000SUJ.F",
    "sharesHeld": 85.5,
    "purchasePriceAvg": 70.2,
    "lastUpdated": "2026-09-25",
    "lastDateFormatted": "25/09/26",
    "return1M": 3.11,
    "return3M": 5.41,
    "return6M": 23.17,
    "return12M": 20.95,
    "return12Minus1M": 19.67,
    "return3YAnnualized": 19.92,
    "score12M": 0.20947362283348658,
    "score12_1": 0.196727918431447,
    "scoreEquilibrado": 0.1850525499961967,
    "scoreProgresivo": 0.09594002462297174,
    "ytd": 0.16425339049048993,
    "ret3yAnnual": 0.1991554902890258,
    "ret5yAnnual": 0.13632158594447397,
    "periodReturns": {
      "1d": 0.0026840203506992566,
      "1w": 0.017584590120104604,
      "1m": 0.031082429579258886,
      "3m": 0.054095188729703425,
      "6m": 0.23165566944504246,
      "1y": 0.20947362283348658,
      "2y": 0.34688096567666205,
      "3y": 0.724354284954237,
      "5y": 0.8945509263699178
    },
    "periodPrices": {
      "1d": 82.749,
      "1w": 81.5373,
      "1m": 80.4699,
      "3m": 78.7131,
      "6m": 67.3655,
      "1y": 68.601,
      "2y": 61.6024,
      "3y": 48.1172,
      "5y": 43.7946
    },
    "volatility1Y": 12.65,
    "sharpeRatio": 1.37,
    "jensenAlpha": 6.99,
    "sortinoRatio": 2,
    "beta": 0.87,
    "maxDrawdown": -22.45,
    "history": [
      {
        "date": "2021-09-29",
        "nav": 43.79,
        "benchmarkNav": 41.6,
        "riskFreeNav": 100
      },
      {
        "date": "2021-10-28",
        "nav": 45.96,
        "benchmarkNav": 43.66,
        "riskFreeNav": 100
      },
      {
        "date": "2021-11-26",
        "nav": 47.44,
        "benchmarkNav": 45.07,
        "riskFreeNav": 100
      },
      {
        "date": "2021-12-29",
        "nav": 49.38,
        "benchmarkNav": 46.91,
        "riskFreeNav": 100
      },
      {
        "date": "2022-01-31",
        "nav": 47.13,
        "benchmarkNav": 44.78,
        "riskFreeNav": 100
      },
      {
        "date": "2022-03-01",
        "nav": 45.27,
        "benchmarkNav": 43.01,
        "riskFreeNav": 100
      },
      {
        "date": "2022-03-30",
        "nav": 48.33,
        "benchmarkNav": 45.91,
        "riskFreeNav": 100
      },
      {
        "date": "2022-05-02",
        "nav": 46.32,
        "benchmarkNav": 44,
        "riskFreeNav": 100
      },
      {
        "date": "2022-05-31",
        "nav": 45.3,
        "benchmarkNav": 43.03,
        "riskFreeNav": 100
      },
      {
        "date": "2022-06-29",
        "nav": 42.84,
        "benchmarkNav": 40.69,
        "riskFreeNav": 100
      },
      {
        "date": "2022-07-28",
        "nav": 47.16,
        "benchmarkNav": 44.81,
        "riskFreeNav": 100
      },
      {
        "date": "2022-08-26",
        "nav": 47.69,
        "benchmarkNav": 45.31,
        "riskFreeNav": 100
      },
      {
        "date": "2022-09-27",
        "nav": 44.68,
        "benchmarkNav": 42.44,
        "riskFreeNav": 100
      },
      {
        "date": "2022-10-26",
        "nav": 44.96,
        "benchmarkNav": 42.71,
        "riskFreeNav": 100
      },
      {
        "date": "2022-11-24",
        "nav": 45.68,
        "benchmarkNav": 43.4,
        "riskFreeNav": 100
      },
      {
        "date": "2022-12-23",
        "nav": 42.82,
        "benchmarkNav": 40.68,
        "riskFreeNav": 100
      },
      {
        "date": "2023-01-26",
        "nav": 44.25,
        "benchmarkNav": 42.04,
        "riskFreeNav": 100
      },
      {
        "date": "2023-02-24",
        "nav": 44.6,
        "benchmarkNav": 42.37,
        "riskFreeNav": 100
      },
      {
        "date": "2023-03-27",
        "nav": 43.74,
        "benchmarkNav": 41.55,
        "riskFreeNav": 100
      },
      {
        "date": "2023-04-27",
        "nav": 44.55,
        "benchmarkNav": 42.33,
        "riskFreeNav": 100
      },
      {
        "date": "2023-05-29",
        "nav": 46.64,
        "benchmarkNav": 44.3,
        "riskFreeNav": 100
      },
      {
        "date": "2023-06-27",
        "nav": 47.53,
        "benchmarkNav": 45.15,
        "riskFreeNav": 100
      },
      {
        "date": "2023-07-26",
        "nav": 49.09,
        "benchmarkNav": 46.64,
        "riskFreeNav": 100
      },
      {
        "date": "2023-08-24",
        "nav": 48.06,
        "benchmarkNav": 45.66,
        "riskFreeNav": 100
      },
      {
        "date": "2023-09-22",
        "nav": 48.3,
        "benchmarkNav": 45.89,
        "riskFreeNav": 100
      },
      {
        "date": "2023-10-23",
        "nav": 47.31,
        "benchmarkNav": 44.94,
        "riskFreeNav": 100
      },
      {
        "date": "2023-11-21",
        "nav": 49.54,
        "benchmarkNav": 47.06,
        "riskFreeNav": 100
      },
      {
        "date": "2023-12-20",
        "nav": 51.16,
        "benchmarkNav": 48.6,
        "riskFreeNav": 100
      },
      {
        "date": "2024-01-23",
        "nav": 53.68,
        "benchmarkNav": 51,
        "riskFreeNav": 100
      },
      {
        "date": "2024-02-21",
        "nav": 55.16,
        "benchmarkNav": 52.4,
        "riskFreeNav": 100
      },
      {
        "date": "2024-03-21",
        "nav": 57.79,
        "benchmarkNav": 54.9,
        "riskFreeNav": 100
      },
      {
        "date": "2024-04-23",
        "nav": 56.79,
        "benchmarkNav": 53.95,
        "riskFreeNav": 100
      },
      {
        "date": "2024-05-23",
        "nav": 58.35,
        "benchmarkNav": 55.43,
        "riskFreeNav": 100
      },
      {
        "date": "2024-06-21",
        "nav": 61.4,
        "benchmarkNav": 58.33,
        "riskFreeNav": 100
      },
      {
        "date": "2024-07-22",
        "nav": 61.38,
        "benchmarkNav": 58.31,
        "riskFreeNav": 100
      },
      {
        "date": "2024-08-20",
        "nav": 60.53,
        "benchmarkNav": 57.51,
        "riskFreeNav": 100
      },
      {
        "date": "2024-09-18",
        "nav": 60.78,
        "benchmarkNav": 57.74,
        "riskFreeNav": 100
      },
      {
        "date": "2024-10-17",
        "nav": 64.92,
        "benchmarkNav": 61.67,
        "riskFreeNav": 100
      },
      {
        "date": "2024-11-15",
        "nav": 67.09,
        "benchmarkNav": 63.74,
        "riskFreeNav": 100
      },
      {
        "date": "2024-12-16",
        "nav": 69.67,
        "benchmarkNav": 66.18,
        "riskFreeNav": 100
      },
      {
        "date": "2025-01-21",
        "nav": 70.14,
        "benchmarkNav": 66.63,
        "riskFreeNav": 100
      },
      {
        "date": "2025-02-19",
        "nav": 71.13,
        "benchmarkNav": 67.57,
        "riskFreeNav": 100
      },
      {
        "date": "2025-03-20",
        "nav": 63.06,
        "benchmarkNav": 59.91,
        "riskFreeNav": 100
      },
      {
        "date": "2025-04-22",
        "nav": 55.68,
        "benchmarkNav": 52.89,
        "riskFreeNav": 100
      },
      {
        "date": "2025-05-22",
        "nav": 62.65,
        "benchmarkNav": 59.51,
        "riskFreeNav": 100
      },
      {
        "date": "2025-06-20",
        "nav": 62.73,
        "benchmarkNav": 59.6,
        "riskFreeNav": 100
      },
      {
        "date": "2025-07-21",
        "nav": 65.28,
        "benchmarkNav": 62.01,
        "riskFreeNav": 100
      },
      {
        "date": "2025-08-19",
        "nav": 66.56,
        "benchmarkNav": 63.23,
        "riskFreeNav": 100
      },
      {
        "date": "2025-09-17",
        "nav": 67.55,
        "benchmarkNav": 64.17,
        "riskFreeNav": 100
      },
      {
        "date": "2025-10-16",
        "nav": 68.88,
        "benchmarkNav": 65.44,
        "riskFreeNav": 100
      },
      {
        "date": "2025-11-14",
        "nav": 70.39,
        "benchmarkNav": 66.87,
        "riskFreeNav": 100
      },
      {
        "date": "2025-12-15",
        "nav": 70.41,
        "benchmarkNav": 66.89,
        "riskFreeNav": 100
      },
      {
        "date": "2026-01-20",
        "nav": 70.45,
        "benchmarkNav": 66.93,
        "riskFreeNav": 100
      },
      {
        "date": "2026-02-18",
        "nav": 70.8,
        "benchmarkNav": 67.26,
        "riskFreeNav": 100
      },
      {
        "date": "2026-03-19",
        "nav": 69.86,
        "benchmarkNav": 66.36,
        "riskFreeNav": 100
      },
      {
        "date": "2026-04-21",
        "nav": 73.21,
        "benchmarkNav": 69.55,
        "riskFreeNav": 100
      },
      {
        "date": "2026-05-21",
        "nav": 78.27,
        "benchmarkNav": 74.36,
        "riskFreeNav": 100
      },
      {
        "date": "2026-06-19",
        "nav": 79.75,
        "benchmarkNav": 75.77,
        "riskFreeNav": 100
      },
      {
        "date": "2026-07-20",
        "nav": 79.61,
        "benchmarkNav": 75.63,
        "riskFreeNav": 100
      },
      {
        "date": "2026-08-18",
        "nav": 81.06,
        "benchmarkNav": 77.01,
        "riskFreeNav": 100
      },
      {
        "date": "2026-09-17",
        "nav": 81.23,
        "benchmarkNav": 77.17,
        "riskFreeNav": 100
      },
      {
        "date": "2026-09-25",
        "nav": 82.97,
        "benchmarkNav": 78.82,
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
    "currentNAV": 41.2495,
    "currency": "EUR",
    "yahooUrl": "https://finance.yahoo.com/quote/0P00000RQ8.F",
    "sharesHeld": 0,
    "purchasePriceAvg": 0,
    "lastUpdated": "2026-09-25",
    "lastDateFormatted": "25/09/26",
    "return1M": -2.6,
    "return3M": 0.69,
    "return6M": 12.1,
    "return12M": 19.2,
    "return12Minus1M": 21.76,
    "return3YAnnualized": 15.55,
    "score12M": 0.1919616024781543,
    "score12_1": 0.2175770592006716,
    "scoreEquilibrado": 0.1336431859106003,
    "scoreProgresivo": 0.03506039677478352,
    "ytd": 0.10498118160753256,
    "ret3yAnnual": 0.1554562640295638,
    "ret5yAnnual": 0.10337992599161216,
    "periodReturns": {
      "1d": 0.0033005949340609853,
      "1w": 0.006284168335695561,
      "1m": -0.025972032661619848,
      "3m": 0.006868758863603608,
      "6m": 0.12096210966267473,
      "1y": 0.1919616024781543,
      "2y": 0.2976723408405244,
      "3y": 0.5426255992939364,
      "5y": 0.6354052682493616
    },
    "periodPrices": {
      "1d": 41.1138,
      "1w": 40.9919,
      "1m": 42.3494,
      "3m": 40.9681,
      "6m": 36.7983,
      "1y": 34.6064,
      "2y": 31.7873,
      "3y": 26.7398,
      "5y": 25.2228
    },
    "volatility1Y": 12.33,
    "sharpeRatio": 1.26,
    "jensenAlpha": 5.47,
    "sortinoRatio": 1.94,
    "beta": 0.85,
    "maxDrawdown": -19.29,
    "history": [
      {
        "date": "2021-09-29",
        "nav": 25.22,
        "benchmarkNav": 23.96,
        "riskFreeNav": 100
      },
      {
        "date": "2021-10-28",
        "nav": 26.37,
        "benchmarkNav": 25.06,
        "riskFreeNav": 100
      },
      {
        "date": "2021-11-26",
        "nav": 25.81,
        "benchmarkNav": 24.52,
        "riskFreeNav": 100
      },
      {
        "date": "2021-12-29",
        "nav": 27.17,
        "benchmarkNav": 25.82,
        "riskFreeNav": 100
      },
      {
        "date": "2022-01-31",
        "nav": 26.29,
        "benchmarkNav": 24.98,
        "riskFreeNav": 100
      },
      {
        "date": "2022-03-01",
        "nav": 24.91,
        "benchmarkNav": 23.66,
        "riskFreeNav": 100
      },
      {
        "date": "2022-03-30",
        "nav": 25.96,
        "benchmarkNav": 24.66,
        "riskFreeNav": 100
      },
      {
        "date": "2022-05-02",
        "nav": 25.25,
        "benchmarkNav": 23.99,
        "riskFreeNav": 100
      },
      {
        "date": "2022-05-31",
        "nav": 25.42,
        "benchmarkNav": 24.15,
        "riskFreeNav": 100
      },
      {
        "date": "2022-06-29",
        "nav": 23.81,
        "benchmarkNav": 22.62,
        "riskFreeNav": 100
      },
      {
        "date": "2022-07-28",
        "nav": 24.93,
        "benchmarkNav": 23.68,
        "riskFreeNav": 100
      },
      {
        "date": "2022-08-26",
        "nav": 24.64,
        "benchmarkNav": 23.41,
        "riskFreeNav": 100
      },
      {
        "date": "2022-09-27",
        "nav": 22.51,
        "benchmarkNav": 21.39,
        "riskFreeNav": 100
      },
      {
        "date": "2022-10-26",
        "nav": 23.78,
        "benchmarkNav": 22.6,
        "riskFreeNav": 100
      },
      {
        "date": "2022-11-24",
        "nav": 25.54,
        "benchmarkNav": 24.26,
        "riskFreeNav": 100
      },
      {
        "date": "2022-12-23",
        "nav": 24.79,
        "benchmarkNav": 23.55,
        "riskFreeNav": 100
      },
      {
        "date": "2023-01-26",
        "nav": 26.37,
        "benchmarkNav": 25.05,
        "riskFreeNav": 100
      },
      {
        "date": "2023-02-24",
        "nav": 26.61,
        "benchmarkNav": 25.28,
        "riskFreeNav": 100
      },
      {
        "date": "2023-03-27",
        "nav": 26,
        "benchmarkNav": 24.7,
        "riskFreeNav": 100
      },
      {
        "date": "2023-04-27",
        "nav": 27.29,
        "benchmarkNav": 25.93,
        "riskFreeNav": 100
      },
      {
        "date": "2023-05-29",
        "nav": 27.34,
        "benchmarkNav": 25.98,
        "riskFreeNav": 100
      },
      {
        "date": "2023-06-27",
        "nav": 26.93,
        "benchmarkNav": 25.59,
        "riskFreeNav": 100
      },
      {
        "date": "2023-07-26",
        "nav": 27.65,
        "benchmarkNav": 26.27,
        "riskFreeNav": 100
      },
      {
        "date": "2023-08-24",
        "nav": 26.93,
        "benchmarkNav": 25.59,
        "riskFreeNav": 100
      },
      {
        "date": "2023-09-22",
        "nav": 27.07,
        "benchmarkNav": 25.72,
        "riskFreeNav": 100
      },
      {
        "date": "2023-10-23",
        "nav": 25.92,
        "benchmarkNav": 24.62,
        "riskFreeNav": 100
      },
      {
        "date": "2023-11-21",
        "nav": 27.25,
        "benchmarkNav": 25.88,
        "riskFreeNav": 100
      },
      {
        "date": "2023-12-20",
        "nav": 28.55,
        "benchmarkNav": 27.12,
        "riskFreeNav": 100
      },
      {
        "date": "2024-01-23",
        "nav": 28.23,
        "benchmarkNav": 26.82,
        "riskFreeNav": 100
      },
      {
        "date": "2024-02-21",
        "nav": 29.42,
        "benchmarkNav": 27.95,
        "riskFreeNav": 100
      },
      {
        "date": "2024-03-21",
        "nav": 30.62,
        "benchmarkNav": 29.09,
        "riskFreeNav": 100
      },
      {
        "date": "2024-04-23",
        "nav": 30.66,
        "benchmarkNav": 29.13,
        "riskFreeNav": 100
      },
      {
        "date": "2024-05-23",
        "nav": 31.78,
        "benchmarkNav": 30.19,
        "riskFreeNav": 100
      },
      {
        "date": "2024-06-21",
        "nav": 31.52,
        "benchmarkNav": 29.94,
        "riskFreeNav": 100
      },
      {
        "date": "2024-07-22",
        "nav": 31.46,
        "benchmarkNav": 29.88,
        "riskFreeNav": 100
      },
      {
        "date": "2024-08-20",
        "nav": 31.38,
        "benchmarkNav": 29.81,
        "riskFreeNav": 100
      },
      {
        "date": "2024-09-18",
        "nav": 31.48,
        "benchmarkNav": 29.91,
        "riskFreeNav": 100
      },
      {
        "date": "2024-10-17",
        "nav": 32.11,
        "benchmarkNav": 30.5,
        "riskFreeNav": 100
      },
      {
        "date": "2024-11-15",
        "nav": 30.85,
        "benchmarkNav": 29.31,
        "riskFreeNav": 100
      },
      {
        "date": "2024-12-16",
        "nav": 31.68,
        "benchmarkNav": 30.1,
        "riskFreeNav": 100
      },
      {
        "date": "2025-01-21",
        "nav": 32.34,
        "benchmarkNav": 30.72,
        "riskFreeNav": 100
      },
      {
        "date": "2025-02-19",
        "nav": 34.04,
        "benchmarkNav": 32.34,
        "riskFreeNav": 100
      },
      {
        "date": "2025-03-20",
        "nav": 34.17,
        "benchmarkNav": 32.47,
        "riskFreeNav": 100
      },
      {
        "date": "2025-04-22",
        "nav": 31.48,
        "benchmarkNav": 29.91,
        "riskFreeNav": 100
      },
      {
        "date": "2025-05-22",
        "nav": 34.41,
        "benchmarkNav": 32.69,
        "riskFreeNav": 100
      },
      {
        "date": "2025-06-20",
        "nav": 33.63,
        "benchmarkNav": 31.95,
        "riskFreeNav": 100
      },
      {
        "date": "2025-07-21",
        "nav": 34.22,
        "benchmarkNav": 32.51,
        "riskFreeNav": 100
      },
      {
        "date": "2025-08-19",
        "nav": 34.99,
        "benchmarkNav": 33.24,
        "riskFreeNav": 100
      },
      {
        "date": "2025-09-17",
        "nav": 34.67,
        "benchmarkNav": 32.94,
        "riskFreeNav": 100
      },
      {
        "date": "2025-10-16",
        "nav": 35.99,
        "benchmarkNav": 34.19,
        "riskFreeNav": 100
      },
      {
        "date": "2025-11-14",
        "nav": 36.24,
        "benchmarkNav": 34.43,
        "riskFreeNav": 100
      },
      {
        "date": "2025-12-15",
        "nav": 36.7,
        "benchmarkNav": 34.87,
        "riskFreeNav": 100
      },
      {
        "date": "2026-01-20",
        "nav": 37.98,
        "benchmarkNav": 36.08,
        "riskFreeNav": 100
      },
      {
        "date": "2026-02-18",
        "nav": 39.63,
        "benchmarkNav": 37.65,
        "riskFreeNav": 100
      },
      {
        "date": "2026-03-19",
        "nav": 36.92,
        "benchmarkNav": 35.07,
        "riskFreeNav": 100
      },
      {
        "date": "2026-04-21",
        "nav": 39.21,
        "benchmarkNav": 37.25,
        "riskFreeNav": 100
      },
      {
        "date": "2026-05-21",
        "nav": 39.79,
        "benchmarkNav": 37.8,
        "riskFreeNav": 100
      },
      {
        "date": "2026-06-19",
        "nav": 40.92,
        "benchmarkNav": 38.87,
        "riskFreeNav": 100
      },
      {
        "date": "2026-07-20",
        "nav": 41.19,
        "benchmarkNav": 39.13,
        "riskFreeNav": 100
      },
      {
        "date": "2026-08-18",
        "nav": 42.08,
        "benchmarkNav": 39.98,
        "riskFreeNav": 100
      },
      {
        "date": "2026-09-17",
        "nav": 41.45,
        "benchmarkNav": 39.38,
        "riskFreeNav": 100
      },
      {
        "date": "2026-09-25",
        "nav": 41.25,
        "benchmarkNav": 39.19,
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
    "currentNAV": 317.7328,
    "currency": "EUR",
    "yahooUrl": "https://finance.yahoo.com/quote/0P000060MS.F",
    "sharesHeld": 20,
    "purchasePriceAvg": 280,
    "lastUpdated": "2026-09-25",
    "lastDateFormatted": "25/09/26",
    "return1M": 3.28,
    "return3M": 2.07,
    "return6M": 24.67,
    "return12M": 34.34,
    "return12Minus1M": 37.06,
    "return3YAnnualized": 21.74,
    "score12M": 0.34343987427005307,
    "score12_1": 0.37061347132068034,
    "scoreEquilibrado": 0.2498805146930921,
    "scoreProgresivo": 0.10304700860232055,
    "ytd": 0.2929264650229706,
    "ret3yAnnual": 0.21744893943746524,
    "ret5yAnnual": 0.09500918494519817,
    "periodReturns": {
      "1d": -0.0019578704475901043,
      "1w": 0.018368157373400695,
      "1m": 0.032846457884401214,
      "3m": 0.0207443178970661,
      "6m": 0.2467057132621746,
      "1y": 0.34343987427005307,
      "2y": 0.5622556308166751,
      "3y": 0.8044808067246743,
      "5y": 0.5743047662272414
    },
    "periodPrices": {
      "1d": 318.3561,
      "1w": 312.0019,
      "1m": 307.6283,
      "3m": 311.2756,
      "6m": 254.8579,
      "1y": 236.5069,
      "2y": 203.3808,
      "3y": 176.0799,
      "5y": 201.8242
    },
    "volatility1Y": 22.31,
    "sharpeRatio": 1.38,
    "jensenAlpha": 14.1,
    "sortinoRatio": 2.05,
    "beta": 1.4,
    "maxDrawdown": -23.61,
    "history": [
      {
        "date": "2021-09-29",
        "nav": 201.82,
        "benchmarkNav": 191.73,
        "riskFreeNav": 100
      },
      {
        "date": "2021-10-28",
        "nav": 204.79,
        "benchmarkNav": 194.55,
        "riskFreeNav": 100
      },
      {
        "date": "2021-11-26",
        "nav": 202.65,
        "benchmarkNav": 192.52,
        "riskFreeNav": 100
      },
      {
        "date": "2021-12-29",
        "nav": 201.73,
        "benchmarkNav": 191.64,
        "riskFreeNav": 100
      },
      {
        "date": "2022-01-31",
        "nav": 202.82,
        "benchmarkNav": 192.68,
        "riskFreeNav": 100
      },
      {
        "date": "2022-03-01",
        "nav": 196.73,
        "benchmarkNav": 186.9,
        "riskFreeNav": 100
      },
      {
        "date": "2022-03-30",
        "nav": 194.2,
        "benchmarkNav": 184.49,
        "riskFreeNav": 100
      },
      {
        "date": "2022-05-02",
        "nav": 192.57,
        "benchmarkNav": 182.94,
        "riskFreeNav": 100
      },
      {
        "date": "2022-05-31",
        "nav": 190.72,
        "benchmarkNav": 181.18,
        "riskFreeNav": 100
      },
      {
        "date": "2022-06-29",
        "nav": 184.31,
        "benchmarkNav": 175.1,
        "riskFreeNav": 100
      },
      {
        "date": "2022-07-28",
        "nav": 187.96,
        "benchmarkNav": 178.56,
        "riskFreeNav": 100
      },
      {
        "date": "2022-08-26",
        "nav": 192.57,
        "benchmarkNav": 182.94,
        "riskFreeNav": 100
      },
      {
        "date": "2022-09-27",
        "nav": 178.17,
        "benchmarkNav": 169.26,
        "riskFreeNav": 100
      },
      {
        "date": "2022-10-26",
        "nav": 162.92,
        "benchmarkNav": 154.77,
        "riskFreeNav": 100
      },
      {
        "date": "2022-11-24",
        "nav": 174.8,
        "benchmarkNav": 166.06,
        "riskFreeNav": 100
      },
      {
        "date": "2022-12-23",
        "nav": 173.37,
        "benchmarkNav": 164.7,
        "riskFreeNav": 100
      },
      {
        "date": "2023-01-26",
        "nav": 187.21,
        "benchmarkNav": 177.85,
        "riskFreeNav": 100
      },
      {
        "date": "2023-02-24",
        "nav": 178.12,
        "benchmarkNav": 169.21,
        "riskFreeNav": 100
      },
      {
        "date": "2023-03-27",
        "nav": 173.39,
        "benchmarkNav": 164.72,
        "riskFreeNav": 100
      },
      {
        "date": "2023-04-27",
        "nav": 171.42,
        "benchmarkNav": 162.85,
        "riskFreeNav": 100
      },
      {
        "date": "2023-05-29",
        "nav": 176.44,
        "benchmarkNav": 167.62,
        "riskFreeNav": 100
      },
      {
        "date": "2023-06-27",
        "nav": 177.32,
        "benchmarkNav": 168.46,
        "riskFreeNav": 100
      },
      {
        "date": "2023-07-26",
        "nav": 182.87,
        "benchmarkNav": 173.72,
        "riskFreeNav": 100
      },
      {
        "date": "2023-08-24",
        "nav": 178.02,
        "benchmarkNav": 169.12,
        "riskFreeNav": 100
      },
      {
        "date": "2023-09-22",
        "nav": 177.95,
        "benchmarkNav": 169.05,
        "riskFreeNav": 100
      },
      {
        "date": "2023-10-23",
        "nav": 170,
        "benchmarkNav": 161.5,
        "riskFreeNav": 100
      },
      {
        "date": "2023-11-21",
        "nav": 177.89,
        "benchmarkNav": 169,
        "riskFreeNav": 100
      },
      {
        "date": "2023-12-20",
        "nav": 178.82,
        "benchmarkNav": 169.88,
        "riskFreeNav": 100
      },
      {
        "date": "2024-01-23",
        "nav": 176.09,
        "benchmarkNav": 167.29,
        "riskFreeNav": 100
      },
      {
        "date": "2024-02-21",
        "nav": 185.97,
        "benchmarkNav": 176.67,
        "riskFreeNav": 100
      },
      {
        "date": "2024-03-21",
        "nav": 190.73,
        "benchmarkNav": 181.19,
        "riskFreeNav": 100
      },
      {
        "date": "2024-04-23",
        "nav": 188.6,
        "benchmarkNav": 179.17,
        "riskFreeNav": 100
      },
      {
        "date": "2024-05-23",
        "nav": 200.02,
        "benchmarkNav": 190.02,
        "riskFreeNav": 100
      },
      {
        "date": "2024-06-21",
        "nav": 202.5,
        "benchmarkNav": 192.38,
        "riskFreeNav": 100
      },
      {
        "date": "2024-07-22",
        "nav": 199.28,
        "benchmarkNav": 189.31,
        "riskFreeNav": 100
      },
      {
        "date": "2024-08-20",
        "nav": 198.41,
        "benchmarkNav": 188.49,
        "riskFreeNav": 100
      },
      {
        "date": "2024-09-18",
        "nav": 195.53,
        "benchmarkNav": 185.76,
        "riskFreeNav": 100
      },
      {
        "date": "2024-10-17",
        "nav": 210.63,
        "benchmarkNav": 200.1,
        "riskFreeNav": 100
      },
      {
        "date": "2024-11-15",
        "nav": 207.38,
        "benchmarkNav": 197.01,
        "riskFreeNav": 100
      },
      {
        "date": "2024-12-16",
        "nav": 211.35,
        "benchmarkNav": 200.78,
        "riskFreeNav": 100
      },
      {
        "date": "2025-01-21",
        "nav": 210,
        "benchmarkNav": 199.5,
        "riskFreeNav": 100
      },
      {
        "date": "2025-02-19",
        "nav": 220.66,
        "benchmarkNav": 209.62,
        "riskFreeNav": 100
      },
      {
        "date": "2025-03-20",
        "nav": 213.15,
        "benchmarkNav": 202.5,
        "riskFreeNav": 100
      },
      {
        "date": "2025-04-22",
        "nav": 190.02,
        "benchmarkNav": 180.52,
        "riskFreeNav": 100
      },
      {
        "date": "2025-05-22",
        "nav": 210.21,
        "benchmarkNav": 199.7,
        "riskFreeNav": 100
      },
      {
        "date": "2025-06-20",
        "nav": 210.9,
        "benchmarkNav": 200.36,
        "riskFreeNav": 100
      },
      {
        "date": "2025-07-21",
        "nav": 219.41,
        "benchmarkNav": 208.44,
        "riskFreeNav": 100
      },
      {
        "date": "2025-08-19",
        "nav": 223.03,
        "benchmarkNav": 211.88,
        "riskFreeNav": 100
      },
      {
        "date": "2025-09-17",
        "nav": 233.68,
        "benchmarkNav": 222,
        "riskFreeNav": 100
      },
      {
        "date": "2025-10-16",
        "nav": 243.14,
        "benchmarkNav": 230.98,
        "riskFreeNav": 100
      },
      {
        "date": "2025-11-14",
        "nav": 245.25,
        "benchmarkNav": 232.99,
        "riskFreeNav": 100
      },
      {
        "date": "2025-12-15",
        "nav": 240.43,
        "benchmarkNav": 228.41,
        "riskFreeNav": 100
      },
      {
        "date": "2026-01-20",
        "nav": 260.17,
        "benchmarkNav": 247.16,
        "riskFreeNav": 100
      },
      {
        "date": "2026-02-18",
        "nav": 272.01,
        "benchmarkNav": 258.41,
        "riskFreeNav": 100
      },
      {
        "date": "2026-03-19",
        "nav": 264.95,
        "benchmarkNav": 251.7,
        "riskFreeNav": 100
      },
      {
        "date": "2026-04-21",
        "nav": 284.31,
        "benchmarkNav": 270.09,
        "riskFreeNav": 100
      },
      {
        "date": "2026-05-21",
        "nav": 299.67,
        "benchmarkNav": 284.69,
        "riskFreeNav": 100
      },
      {
        "date": "2026-06-19",
        "nav": 323.71,
        "benchmarkNav": 307.53,
        "riskFreeNav": 100
      },
      {
        "date": "2026-07-20",
        "nav": 295.22,
        "benchmarkNav": 280.46,
        "riskFreeNav": 100
      },
      {
        "date": "2026-08-18",
        "nav": 305.16,
        "benchmarkNav": 289.9,
        "riskFreeNav": 100
      },
      {
        "date": "2026-09-17",
        "nav": 307.22,
        "benchmarkNav": 291.86,
        "riskFreeNav": 100
      },
      {
        "date": "2026-09-25",
        "nav": 317.73,
        "benchmarkNav": 301.85,
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
    "currentNAV": 443.2617,
    "currency": "EUR",
    "yahooUrl": "https://finance.yahoo.com/quote/0P00012I66.F",
    "sharesHeld": 0,
    "purchasePriceAvg": 0,
    "lastUpdated": "2026-09-25",
    "lastDateFormatted": "25/09/26",
    "return1M": -1.95,
    "return3M": -1.92,
    "return6M": 15.2,
    "return12M": 21.27,
    "return12Minus1M": 24.58,
    "return3YAnnualized": 15.67,
    "score12M": 0.21270653085076807,
    "score12_1": 0.24578656097726337,
    "scoreEquilibrado": 0.14809892450810827,
    "scoreProgresivo": 0.03811255208194734,
    "ytd": 0.16260850726319354,
    "ret3yAnnual": 0.15669902892694876,
    "ret5yAnnual": 0.07408246518347905,
    "periodReturns": {
      "1d": 0.0025610149426842366,
      "1w": 0.0032076903090771935,
      "1m": -0.019472008738579905,
      "3m": -0.019198421377082053,
      "6m": 0.15195114452713554,
      "1y": 0.21270653085076807,
      "2y": 0.3170487121341776,
      "3y": 0.5476085235104597,
      "5y": 0.4295130786109853
    },
    "periodPrices": {
      "1d": 442.1294,
      "1w": 441.8444,
      "1m": 452.0643,
      "3m": 451.9382,
      "6m": 384.7921,
      "1y": 365.5144,
      "2y": 336.5568,
      "3y": 286.4172,
      "5y": 310.0788
    },
    "volatility1Y": 12.41,
    "sharpeRatio": 1.42,
    "jensenAlpha": 7.43,
    "sortinoRatio": 2.15,
    "beta": 0.86,
    "maxDrawdown": -22.27,
    "history": [
      {
        "date": "2021-09-29",
        "nav": 310.08,
        "benchmarkNav": 294.57,
        "riskFreeNav": 100
      },
      {
        "date": "2021-10-28",
        "nav": 319.08,
        "benchmarkNav": 303.12,
        "riskFreeNav": 100
      },
      {
        "date": "2021-11-26",
        "nav": 317.94,
        "benchmarkNav": 302.04,
        "riskFreeNav": 100
      },
      {
        "date": "2021-12-29",
        "nav": 322.15,
        "benchmarkNav": 306.04,
        "riskFreeNav": 100
      },
      {
        "date": "2022-01-31",
        "nav": 301.6,
        "benchmarkNav": 286.52,
        "riskFreeNav": 100
      },
      {
        "date": "2022-03-01",
        "nav": 299,
        "benchmarkNav": 284.05,
        "riskFreeNav": 100
      },
      {
        "date": "2022-03-30",
        "nav": 309.83,
        "benchmarkNav": 294.34,
        "riskFreeNav": 100
      },
      {
        "date": "2022-05-02",
        "nav": 299.23,
        "benchmarkNav": 284.27,
        "riskFreeNav": 100
      },
      {
        "date": "2022-05-31",
        "nav": 293.68,
        "benchmarkNav": 279,
        "riskFreeNav": 100
      },
      {
        "date": "2022-06-29",
        "nav": 273.28,
        "benchmarkNav": 259.62,
        "riskFreeNav": 100
      },
      {
        "date": "2022-07-28",
        "nav": 301,
        "benchmarkNav": 285.95,
        "riskFreeNav": 100
      },
      {
        "date": "2022-08-26",
        "nav": 305.54,
        "benchmarkNav": 290.27,
        "riskFreeNav": 100
      },
      {
        "date": "2022-09-27",
        "nav": 277.95,
        "benchmarkNav": 264.05,
        "riskFreeNav": 100
      },
      {
        "date": "2022-10-26",
        "nav": 286.17,
        "benchmarkNav": 271.86,
        "riskFreeNav": 100
      },
      {
        "date": "2022-11-24",
        "nav": 295.52,
        "benchmarkNav": 280.74,
        "riskFreeNav": 100
      },
      {
        "date": "2022-12-23",
        "nav": 279.08,
        "benchmarkNav": 265.13,
        "riskFreeNav": 100
      },
      {
        "date": "2023-01-26",
        "nav": 295.97,
        "benchmarkNav": 281.17,
        "riskFreeNav": 100
      },
      {
        "date": "2023-02-24",
        "nav": 299.66,
        "benchmarkNav": 284.68,
        "riskFreeNav": 100
      },
      {
        "date": "2023-03-27",
        "nav": 278.18,
        "benchmarkNav": 264.27,
        "riskFreeNav": 100
      },
      {
        "date": "2023-04-27",
        "nav": 278.58,
        "benchmarkNav": 264.65,
        "riskFreeNav": 100
      },
      {
        "date": "2023-05-29",
        "nav": 284.58,
        "benchmarkNav": 270.35,
        "riskFreeNav": 100
      },
      {
        "date": "2023-06-27",
        "nav": 286.83,
        "benchmarkNav": 272.49,
        "riskFreeNav": 100
      },
      {
        "date": "2023-07-26",
        "nav": 301.64,
        "benchmarkNav": 286.56,
        "riskFreeNav": 100
      },
      {
        "date": "2023-08-24",
        "nav": 289.71,
        "benchmarkNav": 275.22,
        "riskFreeNav": 100
      },
      {
        "date": "2023-09-22",
        "nav": 288.04,
        "benchmarkNav": 273.64,
        "riskFreeNav": 100
      },
      {
        "date": "2023-10-23",
        "nav": 270.24,
        "benchmarkNav": 256.73,
        "riskFreeNav": 100
      },
      {
        "date": "2023-11-21",
        "nav": 283,
        "benchmarkNav": 268.85,
        "riskFreeNav": 100
      },
      {
        "date": "2023-12-20",
        "nav": 306.93,
        "benchmarkNav": 291.58,
        "riskFreeNav": 100
      },
      {
        "date": "2024-01-23",
        "nav": 308.94,
        "benchmarkNav": 293.49,
        "riskFreeNav": 100
      },
      {
        "date": "2024-02-21",
        "nav": 313.39,
        "benchmarkNav": 297.72,
        "riskFreeNav": 100
      },
      {
        "date": "2024-03-21",
        "nav": 327.11,
        "benchmarkNav": 310.76,
        "riskFreeNav": 100
      },
      {
        "date": "2024-04-23",
        "nav": 320.75,
        "benchmarkNav": 304.71,
        "riskFreeNav": 100
      },
      {
        "date": "2024-05-23",
        "nav": 325.54,
        "benchmarkNav": 309.26,
        "riskFreeNav": 100
      },
      {
        "date": "2024-06-21",
        "nav": 324.85,
        "benchmarkNav": 308.6,
        "riskFreeNav": 100
      },
      {
        "date": "2024-07-22",
        "nav": 337.57,
        "benchmarkNav": 320.69,
        "riskFreeNav": 100
      },
      {
        "date": "2024-08-20",
        "nav": 328.5,
        "benchmarkNav": 312.08,
        "riskFreeNav": 100
      },
      {
        "date": "2024-09-18",
        "nav": 335.98,
        "benchmarkNav": 319.18,
        "riskFreeNav": 100
      },
      {
        "date": "2024-10-17",
        "nav": 353.05,
        "benchmarkNav": 335.39,
        "riskFreeNav": 100
      },
      {
        "date": "2024-11-15",
        "nav": 359.09,
        "benchmarkNav": 341.13,
        "riskFreeNav": 100
      },
      {
        "date": "2024-12-16",
        "nav": 367.77,
        "benchmarkNav": 349.39,
        "riskFreeNav": 100
      },
      {
        "date": "2025-01-21",
        "nav": 369.84,
        "benchmarkNav": 351.35,
        "riskFreeNav": 100
      },
      {
        "date": "2025-02-19",
        "nav": 370.11,
        "benchmarkNav": 351.61,
        "riskFreeNav": 100
      },
      {
        "date": "2025-03-20",
        "nav": 338.52,
        "benchmarkNav": 321.6,
        "riskFreeNav": 100
      },
      {
        "date": "2025-04-22",
        "nav": 302.83,
        "benchmarkNav": 287.68,
        "riskFreeNav": 100
      },
      {
        "date": "2025-05-22",
        "nav": 333.32,
        "benchmarkNav": 316.65,
        "riskFreeNav": 100
      },
      {
        "date": "2025-06-20",
        "nav": 335.38,
        "benchmarkNav": 318.61,
        "riskFreeNav": 100
      },
      {
        "date": "2025-07-21",
        "nav": 347.26,
        "benchmarkNav": 329.9,
        "riskFreeNav": 100
      },
      {
        "date": "2025-08-19",
        "nav": 355.91,
        "benchmarkNav": 338.11,
        "riskFreeNav": 100
      },
      {
        "date": "2025-09-17",
        "nav": 363.93,
        "benchmarkNav": 345.73,
        "riskFreeNav": 100
      },
      {
        "date": "2025-10-16",
        "nav": 370.78,
        "benchmarkNav": 352.24,
        "riskFreeNav": 100
      },
      {
        "date": "2025-11-14",
        "nav": 367.69,
        "benchmarkNav": 349.31,
        "riskFreeNav": 100
      },
      {
        "date": "2025-12-15",
        "nav": 379.42,
        "benchmarkNav": 360.45,
        "riskFreeNav": 100
      },
      {
        "date": "2026-01-20",
        "nav": 399.37,
        "benchmarkNav": 379.4,
        "riskFreeNav": 100
      },
      {
        "date": "2026-02-18",
        "nav": 410.83,
        "benchmarkNav": 390.29,
        "riskFreeNav": 100
      },
      {
        "date": "2026-03-19",
        "nav": 392.76,
        "benchmarkNav": 373.12,
        "riskFreeNav": 100
      },
      {
        "date": "2026-04-21",
        "nav": 418.1,
        "benchmarkNav": 397.19,
        "riskFreeNav": 100
      },
      {
        "date": "2026-05-21",
        "nav": 428.97,
        "benchmarkNav": 407.52,
        "riskFreeNav": 100
      },
      {
        "date": "2026-06-19",
        "nav": 447.81,
        "benchmarkNav": 425.41,
        "riskFreeNav": 100
      },
      {
        "date": "2026-07-20",
        "nav": 440.86,
        "benchmarkNav": 418.82,
        "riskFreeNav": 100
      },
      {
        "date": "2026-08-18",
        "nav": 452.24,
        "benchmarkNav": 429.63,
        "riskFreeNav": 100
      },
      {
        "date": "2026-09-17",
        "nav": 443.62,
        "benchmarkNav": 421.44,
        "riskFreeNav": 100
      },
      {
        "date": "2026-09-25",
        "nav": 443.26,
        "benchmarkNav": 421.1,
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
    "currentNAV": 10.7196,
    "currency": "EUR",
    "yahooUrl": "https://finance.yahoo.com/quote/0P0001CLDI.F",
    "sharesHeld": 0,
    "purchasePriceAvg": 0,
    "lastUpdated": "2026-09-25",
    "lastDateFormatted": "25/09/26",
    "return1M": 4.26,
    "return3M": 5.85,
    "return6M": 19.88,
    "return12M": 29.72,
    "return12Minus1M": 27.21,
    "return3YAnnualized": 17.6,
    "score12M": 0.29719133075982906,
    "score12_1": 0.2721288758011431,
    "scoreEquilibrado": 0.21994442425147753,
    "scoreProgresivo": 0.10407095974036179,
    "ytd": 0.25613443014835124,
    "ret3yAnnual": 0.17603452587308333,
    "ret5yAnnual": 0.09984234720589646,
    "periodReturns": {
      "1d": 0.023028544706679366,
      "1w": 0.016682948111194307,
      "1m": 0.042600373482726495,
      "3m": 0.05847502814147765,
      "6m": 0.1988458441442249,
      "1y": 0.29719133075982906,
      "2y": 0.45437277833554934,
      "3y": 0.6265230255671042,
      "5y": 0.6093562334854672
    },
    "periodPrices": {
      "1d": 10.4783,
      "1w": 10.5437,
      "1m": 10.2816,
      "3m": 10.1274,
      "6m": 8.9416,
      "1y": 8.2637,
      "2y": 7.3706,
      "3y": 6.5905,
      "5y": 6.6608
    },
    "volatility1Y": 21.16,
    "sharpeRatio": 1.23,
    "jensenAlpha": 9.48,
    "sortinoRatio": 1.86,
    "beta": 1.4,
    "maxDrawdown": -19.26,
    "history": [
      {
        "date": "2021-09-29",
        "nav": 6.66,
        "benchmarkNav": 6.33,
        "riskFreeNav": 100
      },
      {
        "date": "2021-10-28",
        "nav": 6.43,
        "benchmarkNav": 6.1,
        "riskFreeNav": 100
      },
      {
        "date": "2021-11-26",
        "nav": 6.64,
        "benchmarkNav": 6.31,
        "riskFreeNav": 100
      },
      {
        "date": "2021-12-29",
        "nav": 6.57,
        "benchmarkNav": 6.24,
        "riskFreeNav": 100
      },
      {
        "date": "2022-01-31",
        "nav": 6.28,
        "benchmarkNav": 5.97,
        "riskFreeNav": 100
      },
      {
        "date": "2022-03-01",
        "nav": 6.31,
        "benchmarkNav": 5.99,
        "riskFreeNav": 100
      },
      {
        "date": "2022-03-30",
        "nav": 6.23,
        "benchmarkNav": 5.92,
        "riskFreeNav": 100
      },
      {
        "date": "2022-05-02",
        "nav": 5.97,
        "benchmarkNav": 5.67,
        "riskFreeNav": 100
      },
      {
        "date": "2022-05-31",
        "nav": 5.99,
        "benchmarkNav": 5.69,
        "riskFreeNav": 100
      },
      {
        "date": "2022-06-29",
        "nav": 5.68,
        "benchmarkNav": 5.39,
        "riskFreeNav": 100
      },
      {
        "date": "2022-07-28",
        "nav": 6.14,
        "benchmarkNav": 5.83,
        "riskFreeNav": 100
      },
      {
        "date": "2022-08-26",
        "nav": 6.2,
        "benchmarkNav": 5.89,
        "riskFreeNav": 100
      },
      {
        "date": "2022-09-26",
        "nav": 5.73,
        "benchmarkNav": 5.44,
        "riskFreeNav": 100
      },
      {
        "date": "2022-10-25",
        "nav": 5.6,
        "benchmarkNav": 5.32,
        "riskFreeNav": 100
      },
      {
        "date": "2022-11-23",
        "nav": 5.96,
        "benchmarkNav": 5.67,
        "riskFreeNav": 100
      },
      {
        "date": "2022-12-22",
        "nav": 5.88,
        "benchmarkNav": 5.59,
        "riskFreeNav": 100
      },
      {
        "date": "2023-01-24",
        "nav": 6.04,
        "benchmarkNav": 5.74,
        "riskFreeNav": 100
      },
      {
        "date": "2023-02-22",
        "nav": 5.96,
        "benchmarkNav": 5.66,
        "riskFreeNav": 100
      },
      {
        "date": "2023-03-23",
        "nav": 5.92,
        "benchmarkNav": 5.62,
        "riskFreeNav": 100
      },
      {
        "date": "2023-04-25",
        "nav": 6.06,
        "benchmarkNav": 5.75,
        "riskFreeNav": 100
      },
      {
        "date": "2023-05-25",
        "nav": 6.28,
        "benchmarkNav": 5.96,
        "riskFreeNav": 100
      },
      {
        "date": "2023-06-23",
        "nav": 6.37,
        "benchmarkNav": 6.05,
        "riskFreeNav": 100
      },
      {
        "date": "2023-07-24",
        "nav": 6.42,
        "benchmarkNav": 6.1,
        "riskFreeNav": 100
      },
      {
        "date": "2023-08-22",
        "nav": 6.28,
        "benchmarkNav": 5.96,
        "riskFreeNav": 100
      },
      {
        "date": "2023-09-20",
        "nav": 6.67,
        "benchmarkNav": 6.34,
        "riskFreeNav": 100
      },
      {
        "date": "2023-10-19",
        "nav": 6.32,
        "benchmarkNav": 6.01,
        "riskFreeNav": 100
      },
      {
        "date": "2023-11-17",
        "nav": 6.52,
        "benchmarkNav": 6.2,
        "riskFreeNav": 100
      },
      {
        "date": "2023-12-18",
        "nav": 6.57,
        "benchmarkNav": 6.24,
        "riskFreeNav": 100
      },
      {
        "date": "2024-01-19",
        "nav": 6.94,
        "benchmarkNav": 6.6,
        "riskFreeNav": 100
      },
      {
        "date": "2024-02-19",
        "nav": 7.3,
        "benchmarkNav": 6.94,
        "riskFreeNav": 100
      },
      {
        "date": "2024-03-19",
        "nav": 7.52,
        "benchmarkNav": 7.15,
        "riskFreeNav": 100
      },
      {
        "date": "2024-04-19",
        "nav": 7.15,
        "benchmarkNav": 6.79,
        "riskFreeNav": 100
      },
      {
        "date": "2024-05-21",
        "nav": 7.34,
        "benchmarkNav": 6.98,
        "riskFreeNav": 100
      },
      {
        "date": "2024-06-19",
        "nav": 7.24,
        "benchmarkNav": 6.88,
        "riskFreeNav": 100
      },
      {
        "date": "2024-07-18",
        "nav": 7.57,
        "benchmarkNav": 7.19,
        "riskFreeNav": 100
      },
      {
        "date": "2024-08-19",
        "nav": 7.36,
        "benchmarkNav": 6.99,
        "riskFreeNav": 100
      },
      {
        "date": "2024-09-17",
        "nav": 7.25,
        "benchmarkNav": 6.88,
        "riskFreeNav": 100
      },
      {
        "date": "2024-10-16",
        "nav": 7.48,
        "benchmarkNav": 7.11,
        "riskFreeNav": 100
      },
      {
        "date": "2024-11-14",
        "nav": 7.43,
        "benchmarkNav": 7.05,
        "riskFreeNav": 100
      },
      {
        "date": "2024-12-13",
        "nav": 7.72,
        "benchmarkNav": 7.34,
        "riskFreeNav": 100
      },
      {
        "date": "2025-01-20",
        "nav": 7.6,
        "benchmarkNav": 7.22,
        "riskFreeNav": 100
      },
      {
        "date": "2025-02-18",
        "nav": 7.94,
        "benchmarkNav": 7.54,
        "riskFreeNav": 100
      },
      {
        "date": "2025-03-19",
        "nav": 7.73,
        "benchmarkNav": 7.34,
        "riskFreeNav": 100
      },
      {
        "date": "2025-04-17",
        "nav": 7.09,
        "benchmarkNav": 6.74,
        "riskFreeNav": 100
      },
      {
        "date": "2025-05-21",
        "nav": 7.62,
        "benchmarkNav": 7.24,
        "riskFreeNav": 100
      },
      {
        "date": "2025-06-19",
        "nav": 7.57,
        "benchmarkNav": 7.19,
        "riskFreeNav": 100
      },
      {
        "date": "2025-07-18",
        "nav": 7.41,
        "benchmarkNav": 7.04,
        "riskFreeNav": 100
      },
      {
        "date": "2025-08-18",
        "nav": 8.22,
        "benchmarkNav": 7.8,
        "riskFreeNav": 100
      },
      {
        "date": "2025-09-16",
        "nav": 8.25,
        "benchmarkNav": 7.84,
        "riskFreeNav": 100
      },
      {
        "date": "2025-10-15",
        "nav": 8.32,
        "benchmarkNav": 7.91,
        "riskFreeNav": 100
      },
      {
        "date": "2025-11-13",
        "nav": 8.72,
        "benchmarkNav": 8.28,
        "riskFreeNav": 100
      },
      {
        "date": "2025-12-12",
        "nav": 8.63,
        "benchmarkNav": 8.2,
        "riskFreeNav": 100
      },
      {
        "date": "2026-01-19",
        "nav": 9.16,
        "benchmarkNav": 8.71,
        "riskFreeNav": 100
      },
      {
        "date": "2026-02-17",
        "nav": 9.52,
        "benchmarkNav": 9.04,
        "riskFreeNav": 100
      },
      {
        "date": "2026-03-18",
        "nav": 9.3,
        "benchmarkNav": 8.83,
        "riskFreeNav": 100
      },
      {
        "date": "2026-04-20",
        "nav": 9.4,
        "benchmarkNav": 8.93,
        "riskFreeNav": 100
      },
      {
        "date": "2026-05-20",
        "nav": 9.55,
        "benchmarkNav": 9.08,
        "riskFreeNav": 100
      },
      {
        "date": "2026-06-18",
        "nav": 10.42,
        "benchmarkNav": 9.9,
        "riskFreeNav": 100
      },
      {
        "date": "2026-07-17",
        "nav": 9.8,
        "benchmarkNav": 9.31,
        "riskFreeNav": 100
      },
      {
        "date": "2026-08-17",
        "nav": 10.6,
        "benchmarkNav": 10.07,
        "riskFreeNav": 100
      },
      {
        "date": "2026-09-16",
        "nav": 10.53,
        "benchmarkNav": 10.01,
        "riskFreeNav": 100
      },
      {
        "date": "2026-09-25",
        "nav": 10.72,
        "benchmarkNav": 10.18,
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
    "currentNAV": 637.78,
    "currency": "EUR",
    "yahooUrl": "https://finance.yahoo.com/quote/0P0001IFKL.F",
    "sharesHeld": 0,
    "purchasePriceAvg": 0,
    "lastUpdated": "2026-09-25",
    "lastDateFormatted": "25/09/26",
    "return1M": -2.54,
    "return3M": 4.49,
    "return6M": 9.01,
    "return12M": 15.58,
    "return12Minus1M": 17.19,
    "return3YAnnualized": 13.42,
    "score12M": 0.15581732511779633,
    "score12_1": 0.17189262754508183,
    "scoreEquilibrado": 0.1139210591189064,
    "scoreProgresivo": 0.036906543079952225,
    "ytd": 0.14056296720197436,
    "ret3yAnnual": 0.13424437121216015,
    "ret5yAnnual": 0.06754548829952323,
    "periodReturns": {
      "1d": -0.002440016266775258,
      "1w": -0.0044953641557143875,
      "1m": -0.025427095748907447,
      "3m": 0.0449243069663805,
      "6m": 0.0900917838891071,
      "1y": 0.15581732511779633,
      "2y": 0.23502643248581556,
      "3y": 0.4592170590523257,
      "5y": 0.386538545154137
    },
    "periodPrices": {
      "1d": 639.34,
      "1w": 640.66,
      "1m": 654.42,
      "3m": 610.36,
      "6m": 585.07,
      "1y": 551.8,
      "2y": 516.41,
      "3y": 437.07,
      "5y": 459.98
    },
    "volatility1Y": 12.07,
    "sharpeRatio": 0.99,
    "jensenAlpha": 2.1,
    "sortinoRatio": 1.51,
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
        "date": "2026-09-25",
        "nav": 637.78,
        "benchmarkNav": 605.89,
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
    "currentNAV": 285.86,
    "currency": "EUR",
    "yahooUrl": "https://finance.yahoo.com/quote/0P000172KL.F",
    "sharesHeld": 0,
    "purchasePriceAvg": 0,
    "lastUpdated": "2026-09-25",
    "lastDateFormatted": "25/09/26",
    "return1M": -4.23,
    "return3M": -0.45,
    "return6M": -2.07,
    "return12M": 18.47,
    "return12Minus1M": 22.06,
    "return3YAnnualized": 6.18,
    "score12M": 0.18466639038541244,
    "score12_1": 0.22057741064856473,
    "scoreEquilibrado": 0.08523403868869724,
    "scoreProgresivo": -0.003921447200638466,
    "ytd": 0.1464206938038901,
    "ret3yAnnual": 0.06179258705509727,
    "ret5yAnnual": 0.03928095580714808,
    "periodReturns": {
      "1d": -0.013901824830107934,
      "1w": -0.020154932474120812,
      "1m": -0.04228088984186551,
      "3m": -0.004457755798565111,
      "6m": -0.02069201781431984,
      "1y": 0.18466639038541244,
      "2y": 0.17841536812597902,
      "3y": 0.19706867671691786,
      "5y": 0.2124528141833142
    },
    "periodPrices": {
      "1d": 289.89,
      "1w": 291.74,
      "1m": 298.48,
      "3m": 287.14,
      "6m": 291.9,
      "1y": 241.3,
      "2y": 242.58,
      "3y": 238.8,
      "5y": 235.77
    },
    "volatility1Y": 12.11,
    "sharpeRatio": 1.22,
    "jensenAlpha": 4.86,
    "sortinoRatio": 1.84,
    "beta": 0.84,
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
        "date": "2026-09-25",
        "nav": 285.86,
        "benchmarkNav": 271.57,
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
    "currentNAV": 196.7792,
    "currency": "EUR",
    "yahooUrl": "https://finance.yahoo.com/quote/0P00000RNA.F",
    "sharesHeld": 0,
    "purchasePriceAvg": 0,
    "lastUpdated": "2026-09-25",
    "lastDateFormatted": "25/09/26",
    "return1M": -2.47,
    "return3M": -4.23,
    "return6M": -2.15,
    "return12M": -2.39,
    "return12Minus1M": 0.09,
    "return3YAnnualized": 2.04,
    "score12M": -0.023879289519333713,
    "score12_1": 0.0009286958074741225,
    "scoreEquilibrado": -0.026851825937623853,
    "scoreProgresivo": -0.029261536115999888,
    "ytd": -0.02972998692856854,
    "ret3yAnnual": 0.020388345810940622,
    "ret5yAnnual": -0.029084904302093206,
    "periodReturns": {
      "1d": -0.00047391077981939755,
      "1w": -0.005454908432035999,
      "1m": -0.024687723346824564,
      "3m": -0.042342382240192156,
      "6m": -0.021479015766395215,
      "1y": -0.023879289519333713,
      "2y": -0.020987315271426166,
      "3y": 0.062420566489829854,
      "5y": -0.1372076861524295
    },
    "periodPrices": {
      "1d": 196.8725,
      "1w": 197.8585,
      "1m": 201.7602,
      "3m": 205.4797,
      "6m": 201.0986,
      "1y": 201.5931,
      "2y": 200.9976,
      "3y": 185.2178,
      "5y": 228.0725
    },
    "volatility1Y": 4.16,
    "sharpeRatio": -1.45,
    "jensenAlpha": -9,
    "sortinoRatio": -2.01,
    "beta": 0.25,
    "maxDrawdown": -20.67,
    "history": [
      {
        "date": "2021-09-29",
        "nav": 228.07,
        "benchmarkNav": 216.67,
        "riskFreeNav": 100
      },
      {
        "date": "2021-10-28",
        "nav": 227.4,
        "benchmarkNav": 216.03,
        "riskFreeNav": 100
      },
      {
        "date": "2021-11-26",
        "nav": 229.39,
        "benchmarkNav": 217.92,
        "riskFreeNav": 100
      },
      {
        "date": "2021-12-29",
        "nav": 226.4,
        "benchmarkNav": 215.08,
        "riskFreeNav": 100
      },
      {
        "date": "2022-01-31",
        "nav": 223.78,
        "benchmarkNav": 212.59,
        "riskFreeNav": 100
      },
      {
        "date": "2022-03-01",
        "nav": 223.29,
        "benchmarkNav": 212.12,
        "riskFreeNav": 100
      },
      {
        "date": "2022-03-30",
        "nav": 212.61,
        "benchmarkNav": 201.98,
        "riskFreeNav": 100
      },
      {
        "date": "2022-05-02",
        "nav": 205.84,
        "benchmarkNav": 195.55,
        "riskFreeNav": 100
      },
      {
        "date": "2022-05-31",
        "nav": 202.67,
        "benchmarkNav": 192.54,
        "riskFreeNav": 100
      },
      {
        "date": "2022-06-29",
        "nav": 197.33,
        "benchmarkNav": 187.47,
        "riskFreeNav": 100
      },
      {
        "date": "2022-07-28",
        "nav": 206.41,
        "benchmarkNav": 196.09,
        "riskFreeNav": 100
      },
      {
        "date": "2022-08-26",
        "nav": 198.33,
        "benchmarkNav": 188.41,
        "riskFreeNav": 100
      },
      {
        "date": "2022-09-27",
        "nav": 187.71,
        "benchmarkNav": 178.33,
        "riskFreeNav": 100
      },
      {
        "date": "2022-10-26",
        "nav": 189.32,
        "benchmarkNav": 179.85,
        "riskFreeNav": 100
      },
      {
        "date": "2022-11-24",
        "nav": 194.83,
        "benchmarkNav": 185.09,
        "riskFreeNav": 100
      },
      {
        "date": "2022-12-23",
        "nav": 187.13,
        "benchmarkNav": 177.77,
        "riskFreeNav": 100
      },
      {
        "date": "2023-01-26",
        "nav": 190.33,
        "benchmarkNav": 180.81,
        "riskFreeNav": 100
      },
      {
        "date": "2023-02-24",
        "nav": 186.13,
        "benchmarkNav": 176.82,
        "riskFreeNav": 100
      },
      {
        "date": "2023-03-27",
        "nav": 190.53,
        "benchmarkNav": 181,
        "riskFreeNav": 100
      },
      {
        "date": "2023-04-27",
        "nav": 187.58,
        "benchmarkNav": 178.2,
        "riskFreeNav": 100
      },
      {
        "date": "2023-05-29",
        "nav": 187.92,
        "benchmarkNav": 178.52,
        "riskFreeNav": 100
      },
      {
        "date": "2023-06-27",
        "nav": 189.9,
        "benchmarkNav": 180.4,
        "riskFreeNav": 100
      },
      {
        "date": "2023-07-26",
        "nav": 189.03,
        "benchmarkNav": 179.57,
        "riskFreeNav": 100
      },
      {
        "date": "2023-08-24",
        "nav": 188.98,
        "benchmarkNav": 179.53,
        "riskFreeNav": 100
      },
      {
        "date": "2023-09-22",
        "nav": 186.11,
        "benchmarkNav": 176.8,
        "riskFreeNav": 100
      },
      {
        "date": "2023-10-23",
        "nav": 184.62,
        "benchmarkNav": 175.39,
        "riskFreeNav": 100
      },
      {
        "date": "2023-11-21",
        "nav": 189.85,
        "benchmarkNav": 180.36,
        "riskFreeNav": 100
      },
      {
        "date": "2023-12-20",
        "nav": 198.67,
        "benchmarkNav": 188.73,
        "riskFreeNav": 100
      },
      {
        "date": "2024-01-23",
        "nav": 194.57,
        "benchmarkNav": 184.84,
        "riskFreeNav": 100
      },
      {
        "date": "2024-02-21",
        "nav": 194.11,
        "benchmarkNav": 184.4,
        "riskFreeNav": 100
      },
      {
        "date": "2024-03-21",
        "nav": 195.79,
        "benchmarkNav": 186,
        "riskFreeNav": 100
      },
      {
        "date": "2024-04-23",
        "nav": 194.79,
        "benchmarkNav": 185.05,
        "riskFreeNav": 100
      },
      {
        "date": "2024-05-23",
        "nav": 194.09,
        "benchmarkNav": 184.39,
        "riskFreeNav": 100
      },
      {
        "date": "2024-06-21",
        "nav": 195.22,
        "benchmarkNav": 185.46,
        "riskFreeNav": 100
      },
      {
        "date": "2024-07-22",
        "nav": 196.46,
        "benchmarkNav": 186.64,
        "riskFreeNav": 100
      },
      {
        "date": "2024-08-20",
        "nav": 199.98,
        "benchmarkNav": 189.98,
        "riskFreeNav": 100
      },
      {
        "date": "2024-09-18",
        "nav": 200.87,
        "benchmarkNav": 190.82,
        "riskFreeNav": 100
      },
      {
        "date": "2024-10-17",
        "nav": 201.82,
        "benchmarkNav": 191.73,
        "riskFreeNav": 100
      },
      {
        "date": "2024-11-15",
        "nav": 201.24,
        "benchmarkNav": 191.18,
        "riskFreeNav": 100
      },
      {
        "date": "2024-12-16",
        "nav": 202.98,
        "benchmarkNav": 192.83,
        "riskFreeNav": 100
      },
      {
        "date": "2025-01-21",
        "nav": 200.38,
        "benchmarkNav": 190.36,
        "riskFreeNav": 100
      },
      {
        "date": "2025-02-19",
        "nav": 200.75,
        "benchmarkNav": 190.71,
        "riskFreeNav": 100
      },
      {
        "date": "2025-03-20",
        "nav": 198.44,
        "benchmarkNav": 188.52,
        "riskFreeNav": 100
      },
      {
        "date": "2025-04-22",
        "nav": 202.81,
        "benchmarkNav": 192.67,
        "riskFreeNav": 100
      },
      {
        "date": "2025-05-22",
        "nav": 201.17,
        "benchmarkNav": 191.11,
        "riskFreeNav": 100
      },
      {
        "date": "2025-06-20",
        "nav": 203.12,
        "benchmarkNav": 192.96,
        "riskFreeNav": 100
      },
      {
        "date": "2025-07-21",
        "nav": 203.03,
        "benchmarkNav": 192.88,
        "riskFreeNav": 100
      },
      {
        "date": "2025-08-19",
        "nav": 201.68,
        "benchmarkNav": 191.6,
        "riskFreeNav": 100
      },
      {
        "date": "2025-09-17",
        "nav": 202.76,
        "benchmarkNav": 192.62,
        "riskFreeNav": 100
      },
      {
        "date": "2025-10-16",
        "nav": 204.68,
        "benchmarkNav": 194.45,
        "riskFreeNav": 100
      },
      {
        "date": "2025-11-14",
        "nav": 203.5,
        "benchmarkNav": 193.33,
        "riskFreeNav": 100
      },
      {
        "date": "2025-12-15",
        "nav": 202.51,
        "benchmarkNav": 192.39,
        "riskFreeNav": 100
      },
      {
        "date": "2026-01-20",
        "nav": 203.59,
        "benchmarkNav": 193.41,
        "riskFreeNav": 100
      },
      {
        "date": "2026-02-18",
        "nav": 205.86,
        "benchmarkNav": 195.57,
        "riskFreeNav": 100
      },
      {
        "date": "2026-03-19",
        "nav": 202.3,
        "benchmarkNav": 192.18,
        "riskFreeNav": 100
      },
      {
        "date": "2026-04-21",
        "nav": 202.75,
        "benchmarkNav": 192.61,
        "riskFreeNav": 100
      },
      {
        "date": "2026-05-21",
        "nav": 202.06,
        "benchmarkNav": 191.96,
        "riskFreeNav": 100
      },
      {
        "date": "2026-06-19",
        "nav": 203.84,
        "benchmarkNav": 193.65,
        "riskFreeNav": 100
      },
      {
        "date": "2026-07-20",
        "nav": 202.16,
        "benchmarkNav": 192.05,
        "riskFreeNav": 100
      },
      {
        "date": "2026-08-18",
        "nav": 201.21,
        "benchmarkNav": 191.15,
        "riskFreeNav": 100
      },
      {
        "date": "2026-09-17",
        "nav": 198.61,
        "benchmarkNav": 188.68,
        "riskFreeNav": 100
      },
      {
        "date": "2026-09-25",
        "nav": 196.78,
        "benchmarkNav": 186.94,
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
    "currentNAV": 97.0969,
    "currency": "EUR",
    "yahooUrl": "https://finance.yahoo.com/quote/0P00012I69.F",
    "sharesHeld": 0,
    "purchasePriceAvg": 0,
    "lastUpdated": "2026-09-25",
    "lastDateFormatted": "25/09/26",
    "return1M": -2.17,
    "return3M": -3.36,
    "return6M": -2.06,
    "return12M": -2.66,
    "return12Minus1M": -0.02,
    "return3YAnnualized": 2.06,
    "score12M": -0.026617010185259304,
    "score12_1": -0.0002185964095791082,
    "scoreEquilibrado": -0.02621596209995717,
    "scoreProgresivo": -0.025538695399317267,
    "ytd": -0.03119917624356683,
    "ret3yAnnual": 0.02061863445678025,
    "ret5yAnnual": -0.023011751996671714,
    "periodReturns": {
      "1d": 0.000886498321322593,
      "1w": -0.006350960677463102,
      "1m": -0.021673988392713173,
      "3m": -0.03361456611292635,
      "6m": -0.020615145949140823,
      "1y": -0.026617010185259304,
      "2y": -0.022190242939605365,
      "3y": 0.0631400531915478,
      "5y": -0.10988381366917421
    },
    "periodPrices": {
      "1d": 97.0109,
      "1w": 97.7175,
      "1m": 99.248,
      "3m": 100.4743,
      "6m": 99.1407,
      "1y": 99.752,
      "2y": 99.3004,
      "3y": 91.3303,
      "5y": 109.0834
    },
    "volatility1Y": 3.14,
    "sharpeRatio": -2.01,
    "jensenAlpha": -9.27,
    "sortinoRatio": -2.64,
    "beta": 0.25,
    "maxDrawdown": -18.14,
    "history": [
      {
        "date": "2021-09-29",
        "nav": 109.08,
        "benchmarkNav": 103.63,
        "riskFreeNav": 100
      },
      {
        "date": "2021-10-28",
        "nav": 108.78,
        "benchmarkNav": 103.34,
        "riskFreeNav": 100
      },
      {
        "date": "2021-11-26",
        "nav": 109.15,
        "benchmarkNav": 103.7,
        "riskFreeNav": 100
      },
      {
        "date": "2021-12-29",
        "nav": 108.46,
        "benchmarkNav": 103.04,
        "riskFreeNav": 100
      },
      {
        "date": "2022-01-31",
        "nav": 106.57,
        "benchmarkNav": 101.24,
        "riskFreeNav": 100
      },
      {
        "date": "2022-03-01",
        "nav": 105.82,
        "benchmarkNav": 100.53,
        "riskFreeNav": 100
      },
      {
        "date": "2022-03-30",
        "nav": 101.93,
        "benchmarkNav": 96.83,
        "riskFreeNav": 100
      },
      {
        "date": "2022-05-02",
        "nav": 98.4,
        "benchmarkNav": 93.48,
        "riskFreeNav": 100
      },
      {
        "date": "2022-05-31",
        "nav": 98.46,
        "benchmarkNav": 93.54,
        "riskFreeNav": 100
      },
      {
        "date": "2022-06-29",
        "nav": 96.14,
        "benchmarkNav": 91.34,
        "riskFreeNav": 100
      },
      {
        "date": "2022-07-28",
        "nav": 99.01,
        "benchmarkNav": 94.06,
        "riskFreeNav": 100
      },
      {
        "date": "2022-08-26",
        "nav": 96.64,
        "benchmarkNav": 91.81,
        "riskFreeNav": 100
      },
      {
        "date": "2022-09-27",
        "nav": 91.47,
        "benchmarkNav": 86.9,
        "riskFreeNav": 100
      },
      {
        "date": "2022-10-26",
        "nav": 91.41,
        "benchmarkNav": 86.84,
        "riskFreeNav": 100
      },
      {
        "date": "2022-11-24",
        "nav": 93.97,
        "benchmarkNav": 89.27,
        "riskFreeNav": 100
      },
      {
        "date": "2022-12-23",
        "nav": 93.02,
        "benchmarkNav": 88.36,
        "riskFreeNav": 100
      },
      {
        "date": "2023-01-26",
        "nav": 94.67,
        "benchmarkNav": 89.94,
        "riskFreeNav": 100
      },
      {
        "date": "2023-02-24",
        "nav": 92.46,
        "benchmarkNav": 87.84,
        "riskFreeNav": 100
      },
      {
        "date": "2023-03-27",
        "nav": 94.38,
        "benchmarkNav": 89.66,
        "riskFreeNav": 100
      },
      {
        "date": "2023-04-27",
        "nav": 94.2,
        "benchmarkNav": 89.49,
        "riskFreeNav": 100
      },
      {
        "date": "2023-05-29",
        "nav": 93.17,
        "benchmarkNav": 88.52,
        "riskFreeNav": 100
      },
      {
        "date": "2023-06-27",
        "nav": 93.87,
        "benchmarkNav": 89.18,
        "riskFreeNav": 100
      },
      {
        "date": "2023-07-26",
        "nav": 93.8,
        "benchmarkNav": 89.11,
        "riskFreeNav": 100
      },
      {
        "date": "2023-08-24",
        "nav": 92.59,
        "benchmarkNav": 87.96,
        "riskFreeNav": 100
      },
      {
        "date": "2023-09-22",
        "nav": 91.86,
        "benchmarkNav": 87.26,
        "riskFreeNav": 100
      },
      {
        "date": "2023-10-23",
        "nav": 90.21,
        "benchmarkNav": 85.7,
        "riskFreeNav": 100
      },
      {
        "date": "2023-11-21",
        "nav": 92.98,
        "benchmarkNav": 88.33,
        "riskFreeNav": 100
      },
      {
        "date": "2023-12-20",
        "nav": 96.58,
        "benchmarkNav": 91.75,
        "riskFreeNav": 100
      },
      {
        "date": "2024-01-23",
        "nav": 95.27,
        "benchmarkNav": 90.51,
        "riskFreeNav": 100
      },
      {
        "date": "2024-02-21",
        "nav": 94.84,
        "benchmarkNav": 90.09,
        "riskFreeNav": 100
      },
      {
        "date": "2024-03-21",
        "nav": 95.49,
        "benchmarkNav": 90.72,
        "riskFreeNav": 100
      },
      {
        "date": "2024-04-23",
        "nav": 94.34,
        "benchmarkNav": 89.63,
        "riskFreeNav": 100
      },
      {
        "date": "2024-05-23",
        "nav": 94.82,
        "benchmarkNav": 90.08,
        "riskFreeNav": 100
      },
      {
        "date": "2024-06-21",
        "nav": 95.91,
        "benchmarkNav": 91.11,
        "riskFreeNav": 100
      },
      {
        "date": "2024-07-22",
        "nav": 96.29,
        "benchmarkNav": 91.47,
        "riskFreeNav": 100
      },
      {
        "date": "2024-08-20",
        "nav": 98.41,
        "benchmarkNav": 93.49,
        "riskFreeNav": 100
      },
      {
        "date": "2024-09-18",
        "nav": 99.31,
        "benchmarkNav": 94.34,
        "riskFreeNav": 100
      },
      {
        "date": "2024-10-17",
        "nav": 98.36,
        "benchmarkNav": 93.45,
        "riskFreeNav": 100
      },
      {
        "date": "2024-11-15",
        "nav": 97.33,
        "benchmarkNav": 92.46,
        "riskFreeNav": 100
      },
      {
        "date": "2024-12-16",
        "nav": 98.05,
        "benchmarkNav": 93.15,
        "riskFreeNav": 100
      },
      {
        "date": "2025-01-21",
        "nav": 97.35,
        "benchmarkNav": 92.48,
        "riskFreeNav": 100
      },
      {
        "date": "2025-02-19",
        "nav": 97.63,
        "benchmarkNav": 92.74,
        "riskFreeNav": 100
      },
      {
        "date": "2025-03-20",
        "nav": 98.18,
        "benchmarkNav": 93.27,
        "riskFreeNav": 100
      },
      {
        "date": "2025-04-22",
        "nav": 98.21,
        "benchmarkNav": 93.3,
        "riskFreeNav": 100
      },
      {
        "date": "2025-05-22",
        "nav": 97.64,
        "benchmarkNav": 92.76,
        "riskFreeNav": 100
      },
      {
        "date": "2025-06-20",
        "nav": 98.75,
        "benchmarkNav": 93.81,
        "riskFreeNav": 100
      },
      {
        "date": "2025-07-21",
        "nav": 98.9,
        "benchmarkNav": 93.95,
        "riskFreeNav": 100
      },
      {
        "date": "2025-08-19",
        "nav": 99.14,
        "benchmarkNav": 94.19,
        "riskFreeNav": 100
      },
      {
        "date": "2025-09-17",
        "nav": 100.22,
        "benchmarkNav": 95.21,
        "riskFreeNav": 100
      },
      {
        "date": "2025-10-16",
        "nav": 100.85,
        "benchmarkNav": 95.81,
        "riskFreeNav": 100
      },
      {
        "date": "2025-11-14",
        "nav": 100.14,
        "benchmarkNav": 95.13,
        "riskFreeNav": 100
      },
      {
        "date": "2025-12-15",
        "nav": 99.98,
        "benchmarkNav": 94.98,
        "riskFreeNav": 100
      },
      {
        "date": "2026-01-20",
        "nav": 99.94,
        "benchmarkNav": 94.94,
        "riskFreeNav": 100
      },
      {
        "date": "2026-02-18",
        "nav": 101.14,
        "benchmarkNav": 96.08,
        "riskFreeNav": 100
      },
      {
        "date": "2026-03-19",
        "nav": 99.68,
        "benchmarkNav": 94.69,
        "riskFreeNav": 100
      },
      {
        "date": "2026-04-21",
        "nav": 99.95,
        "benchmarkNav": 94.96,
        "riskFreeNav": 100
      },
      {
        "date": "2026-05-21",
        "nav": 99.1,
        "benchmarkNav": 94.14,
        "riskFreeNav": 100
      },
      {
        "date": "2026-06-19",
        "nav": 99.95,
        "benchmarkNav": 94.96,
        "riskFreeNav": 100
      },
      {
        "date": "2026-07-20",
        "nav": 99.29,
        "benchmarkNav": 94.32,
        "riskFreeNav": 100
      },
      {
        "date": "2026-08-18",
        "nav": 98.88,
        "benchmarkNav": 93.94,
        "riskFreeNav": 100
      },
      {
        "date": "2026-09-17",
        "nav": 98.03,
        "benchmarkNav": 93.13,
        "riskFreeNav": 100
      },
      {
        "date": "2026-09-25",
        "nav": 97.1,
        "benchmarkNav": 92.24,
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
    "currentNAV": 69.67,
    "currency": "EUR",
    "yahooUrl": "https://finance.yahoo.com/quote/0P0001A2G4.F",
    "sharesHeld": 0,
    "purchasePriceAvg": 0,
    "lastUpdated": "2026-09-25",
    "lastDateFormatted": "25/09/26",
    "return1M": -8.86,
    "return3M": 21.17,
    "return6M": 11.31,
    "return12M": 33.75,
    "return12Minus1M": 78.31,
    "return3YAnnualized": 50.18,
    "score12M": 0.33749280092148193,
    "score12_1": 0.7830650804758572,
    "scoreEquilibrado": 0.24501196865124228,
    "scoreProgresivo": 0.08444187625436853,
    "ytd": 0.03985074626865681,
    "ret3yAnnual": 0.5017714356983574,
    "ret5yAnnual": 0.1856873331450597,
    "periodReturns": {
      "1d": 0.007957175925925819,
      "1w": -0.018594168192703098,
      "1m": -0.08856619570905278,
      "3m": 0.21165217391304347,
      "6m": 0.11311711135964209,
      "1y": 0.33749280092148193,
      "2y": 1.3958046767537828,
      "3y": 2.386971317452601,
      "5y": 1.3434241506895392
    },
    "periodPrices": {
      "1d": 69.12,
      "1w": 70.99,
      "1m": 76.44,
      "3m": 57.5,
      "6m": 62.59,
      "1y": 52.09,
      "2y": 29.08,
      "3y": 20.57,
      "5y": 29.73
    },
    "volatility1Y": 47.91,
    "sharpeRatio": 0.63,
    "jensenAlpha": 13.51,
    "sortinoRatio": 0.88,
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
        "date": "2026-09-25",
        "nav": 69.67,
        "benchmarkNav": 66.19,
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
    "currentNAV": 44606.7383,
    "currency": "EUR",
    "yahooUrl": "https://finance.yahoo.com/quote/0P00000LRT.F",
    "sharesHeld": 0,
    "purchasePriceAvg": 0,
    "lastUpdated": "2026-09-28",
    "lastDateFormatted": "28/09/26",
    "return1M": 0.2,
    "return3M": 0.57,
    "return6M": 1.12,
    "return12M": 2.18,
    "return12Minus1M": 2.16,
    "return3YAnnualized": 3.02,
    "score12M": 0.021751257341851682,
    "score12_1": 0.02158709221774302,
    "scoreEquilibrado": 0.015380186074988256,
    "scoreProgresivo": 0.006932871436806365,
    "ytd": 0.016381531508954383,
    "ret3yAnnual": 0.030156696054127297,
    "ret5yAnnual": 0.022349983611959834,
    "periodReturns": {
      "1d": 0,
      "1w": 0.0004943198091598155,
      "1m": 0.002001665457074475,
      "3m": 0.0057242475024987804,
      "6m": 0.011199026345208862,
      "1y": 0.021751257341851682,
      "2y": 0.0499042936729015,
      "3y": 0.09322579240610751,
      "5y": 0.11685803195430533
    },
    "periodPrices": {
      "1d": 44606.7383,
      "1w": 44584.6992,
      "1m": 44517.6289,
      "3m": 44352.8516,
      "6m": 44112.7188,
      "1y": 43657.1406,
      "2y": 42486.4805,
      "3y": 40802.8594,
      "5y": 39939.4883
    },
    "volatility1Y": 0.5,
    "sharpeRatio": -2.95,
    "jensenAlpha": -1.71,
    "sortinoRatio": -2.95,
    "beta": 0.02,
    "maxDrawdown": -0.53,
    "history": [
      {
        "date": "2021-09-29",
        "nav": 39939.49,
        "benchmarkNav": 37942.51,
        "riskFreeNav": 100
      },
      {
        "date": "2021-10-27",
        "nav": 39923.88,
        "benchmarkNav": 37927.68,
        "riskFreeNav": 100
      },
      {
        "date": "2021-11-25",
        "nav": 39907.8,
        "benchmarkNav": 37912.41,
        "riskFreeNav": 100
      },
      {
        "date": "2021-12-23",
        "nav": 39891.14,
        "benchmarkNav": 37896.58,
        "riskFreeNav": 100
      },
      {
        "date": "2022-01-20",
        "nav": 39873.53,
        "benchmarkNav": 37879.85,
        "riskFreeNav": 100
      },
      {
        "date": "2022-02-17",
        "nav": 39848.41,
        "benchmarkNav": 37855.99,
        "riskFreeNav": 100
      },
      {
        "date": "2022-03-17",
        "nav": 39823.73,
        "benchmarkNav": 37832.54,
        "riskFreeNav": 100
      },
      {
        "date": "2022-04-19",
        "nav": 39811.96,
        "benchmarkNav": 37821.36,
        "riskFreeNav": 100
      },
      {
        "date": "2022-05-17",
        "nav": 39791.39,
        "benchmarkNav": 37801.82,
        "riskFreeNav": 100
      },
      {
        "date": "2022-06-15",
        "nav": 39762.84,
        "benchmarkNav": 37774.7,
        "riskFreeNav": 100
      },
      {
        "date": "2022-07-14",
        "nav": 39750.45,
        "benchmarkNav": 37762.93,
        "riskFreeNav": 100
      },
      {
        "date": "2022-08-11",
        "nav": 39745.33,
        "benchmarkNav": 37758.06,
        "riskFreeNav": 100
      },
      {
        "date": "2022-09-08",
        "nav": 39744.44,
        "benchmarkNav": 37757.22,
        "riskFreeNav": 100
      },
      {
        "date": "2022-10-06",
        "nav": 39725.87,
        "benchmarkNav": 37739.58,
        "riskFreeNav": 100
      },
      {
        "date": "2022-11-07",
        "nav": 39775.98,
        "benchmarkNav": 37787.18,
        "riskFreeNav": 100
      },
      {
        "date": "2022-12-06",
        "nav": 39828.99,
        "benchmarkNav": 37837.54,
        "riskFreeNav": 100
      },
      {
        "date": "2023-01-04",
        "nav": 39883.77,
        "benchmarkNav": 37889.58,
        "riskFreeNav": 100
      },
      {
        "date": "2023-02-01",
        "nav": 39953.72,
        "benchmarkNav": 37956.03,
        "riskFreeNav": 100
      },
      {
        "date": "2023-03-01",
        "nav": 40027.25,
        "benchmarkNav": 38025.89,
        "riskFreeNav": 100
      },
      {
        "date": "2023-03-29",
        "nav": 40087.46,
        "benchmarkNav": 38083.09,
        "riskFreeNav": 100
      },
      {
        "date": "2023-05-02",
        "nav": 40203.86,
        "benchmarkNav": 38193.67,
        "riskFreeNav": 100
      },
      {
        "date": "2023-05-31",
        "nav": 40311.07,
        "benchmarkNav": 38295.52,
        "riskFreeNav": 100
      },
      {
        "date": "2023-06-28",
        "nav": 40414.13,
        "benchmarkNav": 38393.42,
        "riskFreeNav": 100
      },
      {
        "date": "2023-07-27",
        "nav": 40530.53,
        "benchmarkNav": 38504,
        "riskFreeNav": 100
      },
      {
        "date": "2023-08-28",
        "nav": 40666.79,
        "benchmarkNav": 38633.45,
        "riskFreeNav": 100
      },
      {
        "date": "2023-09-25",
        "nav": 40788.79,
        "benchmarkNav": 38749.35,
        "riskFreeNav": 100
      },
      {
        "date": "2023-10-23",
        "nav": 40918.89,
        "benchmarkNav": 38872.95,
        "riskFreeNav": 100
      },
      {
        "date": "2023-11-21",
        "nav": 41050.93,
        "benchmarkNav": 38998.38,
        "riskFreeNav": 100
      },
      {
        "date": "2023-12-19",
        "nav": 41186.52,
        "benchmarkNav": 39127.19,
        "riskFreeNav": 100
      },
      {
        "date": "2024-01-22",
        "nav": 41351.71,
        "benchmarkNav": 39284.13,
        "riskFreeNav": 100
      },
      {
        "date": "2024-02-19",
        "nav": 41482.68,
        "benchmarkNav": 39408.55,
        "riskFreeNav": 100
      },
      {
        "date": "2024-03-18",
        "nav": 41616.78,
        "benchmarkNav": 39535.94,
        "riskFreeNav": 100
      },
      {
        "date": "2024-04-17",
        "nav": 41756.95,
        "benchmarkNav": 39669.1,
        "riskFreeNav": 100
      },
      {
        "date": "2024-05-22",
        "nav": 41921.44,
        "benchmarkNav": 39825.37,
        "riskFreeNav": 100
      },
      {
        "date": "2024-06-19",
        "nav": 42051.22,
        "benchmarkNav": 39948.66,
        "riskFreeNav": 100
      },
      {
        "date": "2024-07-17",
        "nav": 42173.34,
        "benchmarkNav": 40064.67,
        "riskFreeNav": 100
      },
      {
        "date": "2024-08-15",
        "nav": 42300.69,
        "benchmarkNav": 40185.66,
        "riskFreeNav": 100
      },
      {
        "date": "2024-09-12",
        "nav": 42425.39,
        "benchmarkNav": 40304.12,
        "riskFreeNav": 100
      },
      {
        "date": "2024-10-10",
        "nav": 42548.6,
        "benchmarkNav": 40421.17,
        "riskFreeNav": 100
      },
      {
        "date": "2024-11-11",
        "nav": 42675.62,
        "benchmarkNav": 40541.84,
        "riskFreeNav": 100
      },
      {
        "date": "2024-12-09",
        "nav": 42786.78,
        "benchmarkNav": 40647.44,
        "riskFreeNav": 100
      },
      {
        "date": "2025-01-14",
        "nav": 42918.63,
        "benchmarkNav": 40772.7,
        "riskFreeNav": 100
      },
      {
        "date": "2025-02-11",
        "nav": 43020.2,
        "benchmarkNav": 40869.19,
        "riskFreeNav": 100
      },
      {
        "date": "2025-03-11",
        "nav": 43114.14,
        "benchmarkNav": 40958.43,
        "riskFreeNav": 100
      },
      {
        "date": "2025-04-08",
        "nav": 43199.92,
        "benchmarkNav": 41039.93,
        "riskFreeNav": 100
      },
      {
        "date": "2025-05-14",
        "nav": 43303.9,
        "benchmarkNav": 41138.7,
        "riskFreeNav": 100
      },
      {
        "date": "2025-06-12",
        "nav": 43386.94,
        "benchmarkNav": 41217.59,
        "riskFreeNav": 100
      },
      {
        "date": "2025-07-10",
        "nav": 43457.36,
        "benchmarkNav": 41284.49,
        "riskFreeNav": 100
      },
      {
        "date": "2025-08-07",
        "nav": 43525.26,
        "benchmarkNav": 41349,
        "riskFreeNav": 100
      },
      {
        "date": "2025-09-08",
        "nav": 43604.44,
        "benchmarkNav": 41424.22,
        "riskFreeNav": 100
      },
      {
        "date": "2025-10-06",
        "nav": 43675.14,
        "benchmarkNav": 41491.38,
        "riskFreeNav": 100
      },
      {
        "date": "2025-11-03",
        "nav": 43745.35,
        "benchmarkNav": 41558.08,
        "riskFreeNav": 100
      },
      {
        "date": "2025-12-02",
        "nav": 43817.07,
        "benchmarkNav": 41626.22,
        "riskFreeNav": 100
      },
      {
        "date": "2026-01-06",
        "nav": 43905.49,
        "benchmarkNav": 41710.21,
        "riskFreeNav": 100
      },
      {
        "date": "2026-02-03",
        "nav": 43977,
        "benchmarkNav": 41778.15,
        "riskFreeNav": 100
      },
      {
        "date": "2026-03-03",
        "nav": 44047.56,
        "benchmarkNav": 41845.18,
        "riskFreeNav": 100
      },
      {
        "date": "2026-03-31",
        "nav": 44110.88,
        "benchmarkNav": 41905.33,
        "riskFreeNav": 100
      },
      {
        "date": "2026-05-04",
        "nav": 44199.5,
        "benchmarkNav": 41989.53,
        "riskFreeNav": 100
      },
      {
        "date": "2026-06-03",
        "nav": 44279.45,
        "benchmarkNav": 42065.48,
        "riskFreeNav": 100
      },
      {
        "date": "2026-07-01",
        "nav": 44355.49,
        "benchmarkNav": 42137.71,
        "riskFreeNav": 100
      },
      {
        "date": "2026-07-30",
        "nav": 44438.17,
        "benchmarkNav": 42216.26,
        "riskFreeNav": 100
      },
      {
        "date": "2026-08-27",
        "nav": 44517.63,
        "benchmarkNav": 42291.75,
        "riskFreeNav": 100
      },
      {
        "date": "2026-09-24",
        "nav": 44595.06,
        "benchmarkNav": 42365.31,
        "riskFreeNav": 100
      },
      {
        "date": "2026-09-28",
        "nav": 44606.74,
        "benchmarkNav": 42376.4,
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
    "currentNAV": 1.7598,
    "currency": "EUR",
    "yahooUrl": "https://finance.yahoo.com/quote/0P0001MRGW.F",
    "sharesHeld": 1000,
    "purchasePriceAvg": 1.5,
    "lastUpdated": "2026-09-24",
    "lastDateFormatted": "24/09/26",
    "return1M": 6.38,
    "return3M": 3.71,
    "return6M": 31.19,
    "return12M": 26.34,
    "return12Minus1M": 22.66,
    "return3YAnnualized": 23.46,
    "score12M": 0.263407279776007,
    "score12_1": 0.226588566767999,
    "scoreEquilibrado": 0.23270326050013185,
    "scoreProgresivo": 0.1253712060466275,
    "ytd": 0.22191362310790175,
    "ret3yAnnual": 0.23458104579287387,
    "ret5yAnnual": 0.11571080709477854,
    "periodReturns": {
      "1d": -0.0049194232400339155,
      "1w": 0.03853644142814994,
      "1m": 0.06377319712265006,
      "3m": 0.03712871287128716,
      "6m": 0.31191292679290306,
      "1y": 0.263407279776007,
      "2y": 0.47214321566003004,
      "3y": 0.8817365269461077,
      "5y": 0.7288535219569703
    },
    "periodPrices": {
      "1d": 1.7685,
      "1w": 1.6945,
      "1m": 1.6543,
      "3m": 1.6968,
      "6m": 1.3414,
      "1y": 1.3929,
      "2y": 1.1954,
      "3y": 0.9352,
      "5y": 1.0179
    },
    "volatility1Y": 17.05,
    "sharpeRatio": 1.33,
    "jensenAlpha": 8.71,
    "sortinoRatio": 2.03,
    "beta": 1.18,
    "maxDrawdown": -39.36,
    "history": [
      {
        "date": "2021-09-29",
        "nav": 1.02,
        "benchmarkNav": 0.97,
        "riskFreeNav": 100
      },
      {
        "date": "2021-10-28",
        "nav": 1.08,
        "benchmarkNav": 1.03,
        "riskFreeNav": 100
      },
      {
        "date": "2021-11-26",
        "nav": 1.11,
        "benchmarkNav": 1.06,
        "riskFreeNav": 100
      },
      {
        "date": "2021-12-28",
        "nav": 1.14,
        "benchmarkNav": 1.08,
        "riskFreeNav": 100
      },
      {
        "date": "2022-01-27",
        "nav": 0.98,
        "benchmarkNav": 0.93,
        "riskFreeNav": 100
      },
      {
        "date": "2022-02-25",
        "nav": 0.97,
        "benchmarkNav": 0.92,
        "riskFreeNav": 100
      },
      {
        "date": "2022-03-28",
        "nav": 1.01,
        "benchmarkNav": 0.96,
        "riskFreeNav": 100
      },
      {
        "date": "2022-04-28",
        "nav": 0.92,
        "benchmarkNav": 0.87,
        "riskFreeNav": 100
      },
      {
        "date": "2022-05-27",
        "nav": 0.85,
        "benchmarkNav": 0.81,
        "riskFreeNav": 100
      },
      {
        "date": "2022-06-27",
        "nav": 0.82,
        "benchmarkNav": 0.78,
        "riskFreeNav": 100
      },
      {
        "date": "2022-07-26",
        "nav": 0.87,
        "benchmarkNav": 0.83,
        "riskFreeNav": 100
      },
      {
        "date": "2022-08-24",
        "nav": 0.93,
        "benchmarkNav": 0.88,
        "riskFreeNav": 100
      },
      {
        "date": "2022-09-22",
        "nav": 0.83,
        "benchmarkNav": 0.79,
        "riskFreeNav": 100
      },
      {
        "date": "2022-10-21",
        "nav": 0.78,
        "benchmarkNav": 0.74,
        "riskFreeNav": 100
      },
      {
        "date": "2022-11-21",
        "nav": 0.78,
        "benchmarkNav": 0.74,
        "riskFreeNav": 100
      },
      {
        "date": "2022-12-20",
        "nav": 0.72,
        "benchmarkNav": 0.68,
        "riskFreeNav": 100
      },
      {
        "date": "2023-01-19",
        "nav": 0.72,
        "benchmarkNav": 0.68,
        "riskFreeNav": 100
      },
      {
        "date": "2023-02-17",
        "nav": 0.79,
        "benchmarkNav": 0.75,
        "riskFreeNav": 100
      },
      {
        "date": "2023-03-20",
        "nav": 0.8,
        "benchmarkNav": 0.76,
        "riskFreeNav": 100
      },
      {
        "date": "2023-04-20",
        "nav": 0.81,
        "benchmarkNav": 0.77,
        "riskFreeNav": 100
      },
      {
        "date": "2023-05-22",
        "nav": 0.87,
        "benchmarkNav": 0.83,
        "riskFreeNav": 100
      },
      {
        "date": "2023-06-20",
        "nav": 0.94,
        "benchmarkNav": 0.89,
        "riskFreeNav": 100
      },
      {
        "date": "2023-07-19",
        "nav": 0.97,
        "benchmarkNav": 0.92,
        "riskFreeNav": 100
      },
      {
        "date": "2023-08-17",
        "nav": 0.92,
        "benchmarkNav": 0.88,
        "riskFreeNav": 100
      },
      {
        "date": "2023-09-15",
        "nav": 0.97,
        "benchmarkNav": 0.92,
        "riskFreeNav": 100
      },
      {
        "date": "2023-10-16",
        "nav": 0.97,
        "benchmarkNav": 0.92,
        "riskFreeNav": 100
      },
      {
        "date": "2023-11-14",
        "nav": 0.98,
        "benchmarkNav": 0.93,
        "riskFreeNav": 100
      },
      {
        "date": "2023-12-13",
        "nav": 1.02,
        "benchmarkNav": 0.97,
        "riskFreeNav": 100
      },
      {
        "date": "2024-01-16",
        "nav": 1.04,
        "benchmarkNav": 0.99,
        "riskFreeNav": 100
      },
      {
        "date": "2024-02-14",
        "nav": 1.11,
        "benchmarkNav": 1.05,
        "riskFreeNav": 100
      },
      {
        "date": "2024-03-14",
        "nav": 1.11,
        "benchmarkNav": 1.06,
        "riskFreeNav": 100
      },
      {
        "date": "2024-04-16",
        "nav": 1.12,
        "benchmarkNav": 1.07,
        "riskFreeNav": 100
      },
      {
        "date": "2024-05-16",
        "nav": 1.15,
        "benchmarkNav": 1.1,
        "riskFreeNav": 100
      },
      {
        "date": "2024-06-14",
        "nav": 1.23,
        "benchmarkNav": 1.17,
        "riskFreeNav": 100
      },
      {
        "date": "2024-07-15",
        "nav": 1.26,
        "benchmarkNav": 1.2,
        "riskFreeNav": 100
      },
      {
        "date": "2024-08-13",
        "nav": 1.15,
        "benchmarkNav": 1.1,
        "riskFreeNav": 100
      },
      {
        "date": "2024-09-11",
        "nav": 1.15,
        "benchmarkNav": 1.09,
        "riskFreeNav": 100
      },
      {
        "date": "2024-10-11",
        "nav": 1.24,
        "benchmarkNav": 1.18,
        "riskFreeNav": 100
      },
      {
        "date": "2024-11-12",
        "nav": 1.33,
        "benchmarkNav": 1.26,
        "riskFreeNav": 100
      },
      {
        "date": "2024-12-11",
        "nav": 1.39,
        "benchmarkNav": 1.32,
        "riskFreeNav": 100
      },
      {
        "date": "2025-01-20",
        "nav": 1.38,
        "benchmarkNav": 1.31,
        "riskFreeNav": 100
      },
      {
        "date": "2025-02-18",
        "nav": 1.41,
        "benchmarkNav": 1.34,
        "riskFreeNav": 100
      },
      {
        "date": "2025-03-19",
        "nav": 1.21,
        "benchmarkNav": 1.15,
        "riskFreeNav": 100
      },
      {
        "date": "2025-04-17",
        "nav": 1.07,
        "benchmarkNav": 1.02,
        "riskFreeNav": 100
      },
      {
        "date": "2025-05-22",
        "nav": 1.25,
        "benchmarkNav": 1.19,
        "riskFreeNav": 100
      },
      {
        "date": "2025-06-23",
        "nav": 1.25,
        "benchmarkNav": 1.19,
        "riskFreeNav": 100
      },
      {
        "date": "2025-07-23",
        "nav": 1.31,
        "benchmarkNav": 1.24,
        "riskFreeNav": 100
      },
      {
        "date": "2025-08-21",
        "nav": 1.33,
        "benchmarkNav": 1.26,
        "riskFreeNav": 100
      },
      {
        "date": "2025-09-19",
        "nav": 1.39,
        "benchmarkNav": 1.32,
        "riskFreeNav": 100
      },
      {
        "date": "2025-10-21",
        "nav": 1.44,
        "benchmarkNav": 1.37,
        "riskFreeNav": 100
      },
      {
        "date": "2025-11-20",
        "nav": 1.42,
        "benchmarkNav": 1.35,
        "riskFreeNav": 100
      },
      {
        "date": "2025-12-22",
        "nav": 1.44,
        "benchmarkNav": 1.37,
        "riskFreeNav": 100
      },
      {
        "date": "2026-01-28",
        "nav": 1.45,
        "benchmarkNav": 1.38,
        "riskFreeNav": 100
      },
      {
        "date": "2026-02-26",
        "nav": 1.41,
        "benchmarkNav": 1.34,
        "riskFreeNav": 100
      },
      {
        "date": "2026-03-27",
        "nav": 1.34,
        "benchmarkNav": 1.27,
        "riskFreeNav": 100
      },
      {
        "date": "2026-04-29",
        "nav": 1.54,
        "benchmarkNav": 1.47,
        "riskFreeNav": 100
      },
      {
        "date": "2026-05-29",
        "nav": 1.72,
        "benchmarkNav": 1.64,
        "riskFreeNav": 100
      },
      {
        "date": "2026-06-29",
        "nav": 1.71,
        "benchmarkNav": 1.63,
        "riskFreeNav": 100
      },
      {
        "date": "2026-07-28",
        "nav": 1.62,
        "benchmarkNav": 1.54,
        "riskFreeNav": 100
      },
      {
        "date": "2026-08-27",
        "nav": 1.68,
        "benchmarkNav": 1.59,
        "riskFreeNav": 100
      },
      {
        "date": "2026-09-24",
        "nav": 1.76,
        "benchmarkNav": 1.67,
        "riskFreeNav": 100
      }
    ],
    "isBlank": false,
    "isDisabled": false
  }
];
