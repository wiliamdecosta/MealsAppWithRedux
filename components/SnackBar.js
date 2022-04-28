import SnackBar from 'react-native-snackbar-component'

function SnackBarComponent({visible, textMessage, actionHandler}) {
    return <SnackBar visible={visible} 
        accentColor='black'
        backgroundColor='#e5ad06'
        textMessage={textMessage} 
        messageColor='brown'
        actionHandler={actionHandler} 
        actionText='OK'
        autoHidingTime={4000}/>;
}
export default SnackBarComponent;