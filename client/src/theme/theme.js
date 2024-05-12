import {  createTheme } from "@mui/material";


const theme = createTheme({
    typography: {
        fontFamily: [
            'General Sans',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(','),
    },
    components: {
        MuiInputLabel: {
            defaultProps: {
              sx: {
                fontSize: "1.5rem",
                paddingTop: "-20px",
                color: "black"
              },
            },
          },
          MuiOutlinedInput: {
            defaultProps: {
              sx: {
                fontSize: "1.5rem",
              }
            }
          },
        MuiFormHelperText: {
            defaultProps: {
                sx: {
                    fontSize: "1.2rem"
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: "1.3rem",
                    fontWeight: 600
                }
            }
        },
        MuiListItem: {
            styleOverrides: {
                root: {
                    fontSize: "1.6rem",
                    fontFamily: "inherit",
                }
            }
        },
        MuiList: {
            styleOverrides: {
                root: {
                    padding: "2px 0px 10px 25px",
                    fontFamily: [
                        'General Sans',
                        '-apple-system',
                        'BlinkMacSystemFont',
                        '"Segoe UI"',
                        'Roboto',
                        '"Helvetica Neue"',
                        'Arial',
                        'sans-serif',
                        '"Apple Color Emoji"',
                        '"Segoe UI Emoji"',
                        '"Segoe UI Symbol"',
                      ].join(','),
                }
            }
        },
    }
  });

  export {theme}