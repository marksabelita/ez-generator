const styles = (theme) => {
    return {
        profileImage: {
            width: '140px',
            height: '140px',
            pointer: 'cursor !important',
            display: 'inline-block'
        },
        textField: {
            width: '100%',
        },
        maxTextField: {
            width: '100%'
        },
        card: {
            maxWidth: '100%',
            width: '100%',
            textAlign: 'left',
            padding: 32,
            overflow: 'hidden',
            boxShadow:
            '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            [theme.breakpoints.up('lg')]: {
                padding: 48,
            },
            [theme.breakpoints.up('xl')]: {
                padding: '48px 64px',
            },
        },
        form: {
            textAlign: 'left',
            marginBottom: 24,
            [theme.breakpoints.up('xl')]: {
                marginBottom: 32,
            },
        },
        textCenter: {
            // textAlign: 'center',
        },
        button: {
            marginRight: '10px',
            height: 44,
        },
        pointer: {
            cursor: 'pointer',
        },
        textLeft: {
            textAlign: 'left'
        },
        sidebarHolder: {
            backgroundColor: '#fafafa',
        },
        fixedFooter: {
            position: "fixed",
            bottom: 0,
            width: "800px",
            marginLeft: "-16px",
            padding: "25px",
            background: "#e4e4e4",
            zIndex: "9999"
        },
        footerSubmitButton: {
            fontWeight: "bold",
            padding: "8px 32px",
            marginRight: "16px"
        },
        faCloseDrawer: {
            zIndex: '9999',
            color: '#9c9fa3',
            position: 'absolute',
            top: '24px',
            right: '16px',
            fontSize: '16px',
            cursor: 'pointer'
        }
    }
}

export default styles;
