import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',           // Menempatkan kotak secara horizontal
    justifyContent: 'space-between', // Jarak merata di antara kotak
    alignItems: 'center',           // Menyelaraskan kotak di tengah secara vertikal
    width: '80%',                   // Mengatur lebar kontainer
    alignSelf: 'center',            // Menyelaraskan kontainer di tengah layar secara horizontal
  },
  box1: {
    width: 100,
    height: 100,
    backgroundColor: 'red',         // Warna kotak pertama
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: 'green',       // Warna kotak kedua
  },
});

export default styles;
