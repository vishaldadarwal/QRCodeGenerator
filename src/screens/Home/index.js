import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native'
import QRGenerator from '../QRGenerator';
import style from './style';

export const Home = () => {
    const [link, setLink] = useState("")
    const [url, setUrl] = useState("https://reactnative.dev/")
    const [error, setError] = useState(false)
    return (
        <View style={{ flex: 1, alignContent: "center", justifyContent: "center" }} >
            <View style={style.container}>
                <Text style={{ fontSize: 14, color: "black", marginBottom: 10 }} >Text/Url : {url}</Text>
                <QRGenerator text={url} />
                <TextInput
                    value={link}
                    onChangeText={text => {
                        setLink(text)
                        setError(false)
                    }}
                    style={{
                        width: 300,
                        marginTop: 20,
                        borderWidth: 2,
                        padding: 10,
                        borderRadius: 10,
                        color:"black"
                    }}
                    placeholder="Please enter your text/url"
                    placeholderTextColor={"grey"}
                />
                {error && <Text style={{ fontSize: 15, color: "red" }} >
                    Please enter valid text or url
                </Text>}
                <TouchableOpacity style={{ backgroundColor: "black", padding: 20, borderRadius: 40, marginVertical: 10 }} onPress={() => {
                    if (link.trim() !== '' && link.length) {
                        setUrl(link.trim())
                    } else {
                        setError(true)
                    }
                }
                } >
                    <Text style={{ fontSize: 15, color: "white" }} >
                        Generate QR Code
                    </Text>
                </TouchableOpacity>
                {
                    link && <Text onPress={() => {
                        setLink("")
                        setError(false)
                    }} style={{ fontSize: 18, color: "black" }} >
                        clear
                    </Text>
                }
            </View>
        </View>
    )
}
