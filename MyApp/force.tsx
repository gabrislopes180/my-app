// declarations.d.ts
declare module 'react-native-linear-gradient' {
    import * as React from 'react';
    import { ViewStyle } from 'react-native';
  
    interface LinearGradientProps {
      colors: string[];
      start?: { x: number; y: number };
      end?: { x: number; y: number };
      locations?: number[];
      style?: ViewStyle | ViewStyle[];
      children?: React.ReactNode;
    }
  
    const LinearGradient: React.ComponentType<LinearGradientProps>;
    export default LinearGradient;
  }
  