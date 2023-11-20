// ----------------------------------------------------------------------

export default function Popover(theme) {
  return {
    MuiPopover: {
      styleOverrides: {
        paper: {
          // boxShadow: theme.customShadows.,
          borderRadius: Number(theme.shape.borderRadius) * 1.5,
        },
      },
    },
  };
}
