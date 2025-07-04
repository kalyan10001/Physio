import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
// import { X } from 'lucide-react-native';


const FilterDialog = ({
  visible,
  heading,
  options,
  handleChange,
  onClose,
}) => {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.4)',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            width: '90%',
            backgroundColor: 'white',
            borderRadius: 16,
            padding: 20,
            elevation: 10,
            position: 'relative',
          }}
        >
          <TouchableOpacity
            onPress={onClose}
            style={{ position: 'absolute', top: 12, right: 12 }}
          >
            {/* <X size={24} color="#4b5563" /> */}
          </TouchableOpacity>

          {/* Heading */}
          <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 16 }}>
            {heading}
          </Text>

          {/* Options Picker */}
          <Picker
            onValueChange={(value) => handleChange(value)}
          >
            {options && options.map((opt, i) => (
              <Picker.Item key={i} label={opt} value={opt} />
            ))}
          </Picker>
        </View>
      </View>
    </Modal>
  );
};

export default FilterDialog;