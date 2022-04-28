import {View, Text, StyleSheet, TextInput} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function LoginScreen() {
    return (
        <View style={styles.screen}>
            <View style={styles.loginContainer}>
                <Text style={styles.title}>Your Credentials</Text>
                <View style={styles.form}>
                    <TextInput placeholder='Username'
                    style={styles.textInput}/>
                    <TextInput placeholder='Password'
                    secureTextEntry={true}
                    style={styles.textInput}/>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity>
                        <Text style={styles.textButton}> Login </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },

    loginContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        padding: 24,
    },

    title: {
        fontFamily: 'poppins-bold',
        fontSize: 18,
        color: '#e0b39c',
        borderBottomWidth: 3,
        borderBottomColor: '#e0b39c',
    },

    form: {
        marginVertical: 24,
        width: '100%'
    },

    textInput: {
        fontFamily: 'poppins',
        backgroundColor: '#fff389',
        borderColor: '#fff389',
        borderRadius: 10,
        borderWidth: 1,
        padding: 8,
        marginBottom: 15,
    },

    textButton: {
        padding: 10, 
        borderWidth: 1, 
        borderColor: '#e53d06',
        borderRadius: 10,
        backgroundColor: '#e53d06',
        color: 'white',
        textAlign: 'center',
        fontFamily: 'poppins',
        fontSize: 16,
    },

    button: {
        width: '100%',
    },

});