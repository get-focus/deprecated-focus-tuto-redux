import Checkbox from 'focus-components/input/checkbox'
import InputTewx from 'focus-components/input/text'
export const DO_ID = {
  type: 'text',
 InputComponent: InputTewx

  //InputComponent: (props) => <div>DO_ID {JSON.stringify(props)}</div>
}

export const DO_TEXTE = {
  type: 'text',
  //InputComponent: (props) => <div>DO_TEXTE {JSON.stringify(props)}</div>
}
export const DO_AMOUNT = {
  type: 'number',
  //InputComponent: (props) => <div>DO_AMOUNT {JSON.stringify(props)}</div>
}
export const DO_SYMBOL = {
  type: 'text',

  //InputComponent: (props) => <div>DO_SYMBOL {JSON.stringify(props)}</div>
}
export const DO_CODE = {
  type: 'text',
  //InputComponent: (props) => <div>DO_CODE {JSON.stringify(props)}</div>
}
export const DO_MONTANT = {
  type: 'number',
  //InputComponent: (props) => <div>DO_MONTANT {JSON.stringify(props)}</div>
}
export const DO_CIVILITE= {
    type: 'text',
    validators: [{
        type: 'string',
        options: {
            maxLength: 200
        }
    }]
}
import React from 'react'
export const DO_CHECKBOX = {
  type: 'boolean',
  InputComponent: Checkbox,
  DisplayComponent: props => <div>Checkbox {JSON.stringify(props)}</div>
}
