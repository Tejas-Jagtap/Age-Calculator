import React, {useState, Component} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Alert,
  ImageBackground,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function App() {
  const [datePicker, setDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());

  const [currdatePicker, setCurrDatePicker] = useState(false);
  const [currdate, setcurrDate] = useState(new Date());

  const [resDate, setResDate] = useState('');
  const [resMonth, setResMonth] = useState('');
  const [resYear, setResYear] = useState('');

  function showCurrDatePicker() {
    setCurrDatePicker(true);
  }
  function onCurrDateSelected(event, value) {
    setcurrDate(value);
    setCurrDatePicker(false);
  }

  function showDatePicker() {
    setDatePicker(true);
  }
  function onDateSelected(event, value) {
    setDate(value);
    setDatePicker(false);
  }

  function calculateAge(date, currdate) {
    let today = new Date(currdate),
      dob = new Date(date),
      diff = today.getTime() - dob.getTime(),
      years = Math.floor(diff / 31556736000),
      days_diff = Math.floor((diff % 31556736000) / 86400000),
      months = Math.floor(days_diff / 30.4167),
      days = Math.floor(days_diff % 30.4167);
    setResDate(days);
    setResMonth(months);
    setResYear(years);
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styleSheet.MainContainer}>
        <View
          style={{
            display: 'flex',
            width: '150%',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 20,
            backgroundColor: '#483d8b',
          }}>
          <Text style={{fontSize: 25, color: '#FFFFFF', fontWeight: 'bold'}}>
            AGE CALCULATOR 🗓
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            width: '90%',
            height: 40,
            borderRadius: 10,
            marginVertical: 20,
          }}>
          <Text style={{color: '#000000', fontWeight: 'bold', fontSize: 18}}>
            Date of Birth :
          </Text>
        </View>
        <View style={styleSheet.fixToText}>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '65%',
              height: 40,
              borderRadius: 10,
              marginVertical: 0,
              backgroundColor: '#e6e6fa',
            }}>
            <Text style={{color: '#000000', fontWeight: 'bold', fontSize: 18}}>
              {date.getDate()} - {Number(date.getMonth()) + 1} -{' '}
              {date.getFullYear()}
            </Text>
          </View>
          {datePicker && (
            <DateTimePicker
              value={date}
              mode={'date'}
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              is24Hour={true}
              onChange={onDateSelected}
              style={styleSheet.datePicker}
            />
          )}
          {!datePicker && (
            <View
              style={{
                margin: 10,
                marginVertical: 2,
                width: '20%',
              }}>
              <Button title="DOB" onPress={showDatePicker} color="#483d8b" />
            </View>
          )}
        </View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            width: '90%',
            height: 40,
            borderRadius: 10,
            marginVertical: 20,
          }}>
          <Text style={{color: '#000000', fontWeight: 'bold', fontSize: 18}}>
            Choose Date :
          </Text>
        </View>
        <View style={styleSheet.fixToText}>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '65%',
              height: 40,
              borderRadius: 10,
              marginVertical: 0,
              backgroundColor: '#e6e6fa',
            }}>
            <Text style={{color: '#000000', fontWeight: 'bold', fontSize: 18}}>
              {currdate.getDate()} - {Number(currdate.getMonth()) + 1} -{' '}
              {currdate.getFullYear()}
            </Text>
          </View>
          {currdatePicker && (
            <DateTimePicker
              value={currdate}
              mode={'date'}
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              is24Hour={true}
              onChange={onCurrDateSelected}
              style={styleSheet.datePicker}
            />
          )}
          {!currdatePicker && (
            <View
              style={{
                margin: 10,
                marginVertical: 2,
                width: '20%',
                color: 'powderblue',
              }}>
              <Button title="CD" onPress={showCurrDatePicker} color="#483d8b" />
            </View>
          )}
        </View>

        <View
          style={{
            width: '90%',
            borderRadius: 10,
            padding: 50,
            marginVertical: 1,
          }}>
          <Button
            title="Calculate Age"
            color="#dc143c"
            onPress={() => calculateAge(date, currdate)}
          />
        </View>

        <View style={styleSheet.fixToText}>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '25%',
              height: 60,
              borderRadius: 8,
              marginTop: 16,
            }}>
            <Text style={{color: '#000000', fontWeight: 'bold', fontSize: 18}}>
              Years
            </Text>
          </View>
          <View>
            <Text>{'  '}</Text>
          </View>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '25%',
              height: 60,
              borderRadius: 8,
              marginTop: 16,
            }}>
            <Text style={{color: '#000000', fontWeight: 'bold', fontSize: 18}}>
              Months
            </Text>
          </View>
          <View>
            <Text>{'  '}</Text>
          </View>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '25%',
              height: 60,
              borderRadius: 8,
              marginTop: 16,
            }}>
            <Text style={{color: '#000000', fontWeight: 'bold', fontSize: 18}}>
              Days
            </Text>
          </View>
        </View>

        <View style={styleSheet.fixToText}>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '25%',
              height: 60,
              borderRadius: 8,
              backgroundColor: '#e6e6fa',
              marginTop: 0,
            }}>
            <Text style={{color: '#000000', fontWeight: 'bold', fontSize: 16}}>
              {resYear}
            </Text>
          </View>
          <View>
            <Text>{'  '}</Text>
          </View>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '25%',
              height: 60,
              borderRadius: 8,
              backgroundColor: '#e6e6fa',
              marginTop: 0,
            }}>
            <Text style={{color: '#000000', fontWeight: 'bold', fontSize: 16}}>
              {resMonth}
            </Text>
          </View>
          <View>
            <Text>{'  '}</Text>
          </View>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '25%',
              height: 60,
              borderRadius: 8,
              backgroundColor: '#e6e6fa',
              marginTop: 0,
            }}>
            <Text style={{color: '#000000', fontWeight: 'bold', fontSize: 16}}>
              {resDate}
            </Text>
          </View>
        </View>
        <View style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-end',
              padding:15,
              width: '100%',
              borderRadius: 8,
              marginTop: 60,
            }}>
          <Text style={{color: '#a9a9a9'}}>
            @Created by TejasAJ
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styleSheet = StyleSheet.create({
  MainContainer: {
    flex: 1,
    padding: 0,
    alignItems: 'center',
    backgroundColor: '#fffafa',
  },
  text: {
    fontSize: 25,
    color: 'red',
    padding: 3,
    marginBottom: 10,
    textAlign: 'center',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    justifyContent: 'center',
    width: '100%',
    height: '85%',
    padding: 0,
    marginTop: 0,
    position: 'absolute',
  },
  datePicker: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: 420,
    height: 260,
    display: 'flex',
  },
});
