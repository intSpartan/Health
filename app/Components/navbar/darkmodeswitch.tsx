import React, { useEffect } from 'react';
import { useTheme as useNextTheme } from 'next-themes';
import { Switch, useTheme } from '@nextui-org/react';

export const DarkModeSwitch = () => {
   const { setTheme } = useNextTheme();
   const { isDark, type } = useTheme();

   useEffect(() => {
      // Set the initial theme to 'light' when the component mounts
      setTheme('light');
   }, []); // Empty dependency array to run the effect only once

   return (
      <Switch
         checked={isDark}
         onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
      />
   );
};
