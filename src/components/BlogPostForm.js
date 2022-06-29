import React, {useState} from "react";
import {View, Text, StyleSheet, TextInput, Button} from "react-native";

const BlogPostForm = ({onSubmit}) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    return (
        <View>
            <Text style={styles.label}>Enter Title:</Text>
            <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)}/>
            <Text style={styles.label}>Enter Content:</Text>
            <TextInput style={styles.input} value={content} onChangeText={(text) => setContent(text)}/>
            <Button
                title="Save Blog Post"
                onPress={() => onSubmit(title, content)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        fontSize: 16,
        borderWidth: 1,
        borderColor: 'black',
        margin: 5,
        padding: 5
    },
    label: {
        fontSize: 18,
        marginBottom: 5,
        marginLeft: 5,
    }
});

export default BlogPostForm;