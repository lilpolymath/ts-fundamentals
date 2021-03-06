export type Car = {
  make: string;
  model: string;
  color?: string;
  year: number;
  chargeVoltage?: number;
};

export type phonesType = {
  [k: string]: {
    country: string;
    area: string;
    number: string;
  };
};

export type CoinFlip = 'heads' | 'tails';

export interface UserInfo {
  name: string;
  email: string;
}

type UserInfoOutcomeError = ['Error', Error];

type UserInfoOutcomeSuccess = ['Success', UserInfo];

export type UserInfoOutcome =
  | UserInfoOutcomeError
  | UserInfoOutcomeSuccess;

export type SpecialDate = Date & {
  getReason(): string;
};
