import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SPACING, COLORS } from '../utils/styleUtils';

interface HotbarProps {
  slotCount?: number;
  onSlotSelect?: (slot: number) => void;
  selectedSlot?: number;
}

export default function Hotbar({ 
  slotCount = 10, 
  onSlotSelect,
  selectedSlot: controlledSelected,
}: HotbarProps) {
  const [internalSelected, setInternalSelected] = useState(-1);
  
  // Use controlled selection if provided, otherwise use internal state
  const selected = controlledSelected !== undefined ? controlledSelected : internalSelected;
  
  const handleSelect = (slot: number) => {
    if (controlledSelected === undefined) {
      setInternalSelected(slot);
    }
    onSlotSelect?.(slot);
  };

  return (
    <View style={styles.container}>
      {Array.from({ length: slotCount }, (_, i) => i + 1).map(item => (
        <TouchableOpacity
          key={item}
          style={[styles.box, selected === item && styles.selectedBox]}
          onPress={() => handleSelect(item)}
        >
          <Text style={styles.number}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: SPACING.xl,
    right: '50%',
    marginRight: -175, // Half of the container width
    flexDirection: 'row',
  },
  box: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: SPACING.xs,
  },
  selectedBox: {
    borderColor: COLORS.selected,
    backgroundColor: COLORS.selectedBackground,
  },
  number: {
    color: COLORS.white,
    fontSize: 12,
  },
});