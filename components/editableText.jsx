import { useState } from 'react';

export default function EditableText({ text, isEditable }) {
    
    return isEditable
        ? <input value={text} />
}