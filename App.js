import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, Pressable } from 'react-native';


export default function App() {
  const [img, setImg] = useState(true);

  return (
    <View style={{ paddingTop: 90 }}>
      <Pressable onPress={() => setImg(!img)}>
        <Image
          style={{ width: 200, height: 200 }}
          source={{
            uri: img
              ? 'https://cdn-icons-png.flaticon.com/512/142/142310.png'
              : 'https://w7.pngwing.com/pngs/174/558/png-transparent-black-sad-emoji-illustration-face-sadness-smiley-computer-icons-sad-child-people-emoticon-thumbnail.png',
          }}
        />
      </Pressable>
    </View>
  );
}

/*export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={{ paddingTop: 90 }}>
      <Text>Нажато: {count}</Text>

      <Button title="Нажми" onPress={() => setCount(count + 1)} />

      <Button title="Сброс" onPress={() => setCount(0)} />
    </View>
  );
}*/

/*export default function App() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [sum, setSum] = useState(0);

  return (
    <View style={{ paddingTop: 90 }}>
      <TextInput placeholder="A" onChangeText={setA} />
      <TextInput placeholder="B" onChangeText={setB} />

      <Button
        title="Сумма"
        onPress={() => setSum(Number(a) + Number(b))}
      />

      <Text>Результат: {sum}</Text>
    </View>
  );
}
*/







