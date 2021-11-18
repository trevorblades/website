import React from 'react';
import {Box} from '@chakra-ui/react';
import {
  MdBattery20,
  MdBattery30,
  MdBattery50,
  MdBattery60,
  MdBattery80,
  MdBattery90,
  MdBatteryAlert,
  MdBatteryCharging20,
  MdBatteryCharging30,
  MdBatteryCharging50,
  MdBatteryCharging60,
  MdBatteryCharging80,
  MdBatteryCharging90,
  MdBatteryChargingFull,
  MdBatteryFull,
  MdBatteryUnknown
} from 'react-icons/md';
import {useBattery} from 'react-use';

export default function BatteryIndicator() {
  const {isSupported, fetched, level, charging} = useBattery();
  return (
    <div>
      <Box
        fontSize="2xl"
        transform="rotate(90deg)"
        as={
          !isSupported
            ? MdBatteryAlert
            : !fetched
            ? MdBatteryUnknown
            : level < 0.25
            ? charging
              ? MdBatteryCharging20
              : MdBattery20
            : level < 0.45
            ? charging
              ? MdBatteryCharging30
              : MdBattery30
            : level < 0.55
            ? charging
              ? MdBatteryCharging50
              : MdBattery50
            : level < 0.75
            ? charging
              ? MdBatteryCharging60
              : MdBattery60
            : level < 0.85
            ? charging
              ? MdBatteryCharging80
              : MdBattery80
            : level < 0.95
            ? charging
              ? MdBatteryCharging90
              : MdBattery90
            : charging
            ? MdBatteryChargingFull
            : MdBatteryFull
        }
      />
    </div>
  );
}
