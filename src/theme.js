import { createMuiTheme } from "@material-ui/core/styles";
//overirdes for mui components
export default createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: '"Roboto Condensed"',
    h5: {
      fontSize: "1.7rem",
      lineHeight: "1.15"
    }
  },
  overrides: {
    MuiButton: {
      textPrimary: {
        fontWeight: "700",
        color: "#ee6e73",
        textDecoration: "underline",
        "&:hover": {
          textDecoration: "underline",
          color: "#f1494f",
          fontWeight: "900"
        },
        cursor: "pointer"
      },
      containedPrimary: {
        fontWeight: "700",
        backgroundColor: "#ee6e73",
        "&:hover": {
          backgroundColor: "#f1494f",
          fontWeight: "900"
        },
        cursor: "pointer"
      },
      containedSecondary: {
        color: "#ee6e73",
        fontWeight: "700",
        backgroundColor: "#fff",
        border: "1px solid #ee6e73",
        "&:hover": {
          backgroundColor: "#fff",
          border: "1px solid #f1494f",
          fontWeight: "900",
          color: "#f1494f"
        },
        cursor: "pointer"
      }
    },
    MuiCheckbox: {
      colorSecondary: {
        color: "#ee6e73",
        "&$checked": {
          color: "#ee6e73"
        }
      }
    },
    MuiIconButton: {
      root: {
        color: "#2c3e50"
      },
      colorSecondary: {
        color: "#ee6e73"
      }
    },
    MuiSvgIcon: {
      root: {
        cursor: "pointer"
      }
    },
    MuiAppBar: {
      colorDefault: {
        backgroundColor: "#2c3e50"
      }
    },
    MuiTooltip: {
      tooltip: {
        backgroundColor: "#2c3e50",
        fontWeight: "400",
        fontSize: ".8rem"
      }
    },
    MuiTableCell: {
      head: {
        borderBottomWidth: "4px",
        borderBottomColor: "#aba4a4",
        borderRight: "1px solid",
        borderRightColor: " #fff",
        background: "#D8D8D8",
        padding: "15px 16px",
        paddingLeft: "25px",
        fontWeight: "bolder",
        color: "black",
        textAlign: "left"
      },
      root: {
        padding: "10px 16px",
        paddingLeft: "25px"
      }
    }
  }
});
