import React from 'react'
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';

import { Container, ProductTable, Total } from './styles'

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th/>
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th/>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src="https://static.netshoes.com.br/produtos/tenis-puma-cell-aether-sl-plus-masculino/38/NWG-0510-038/NWG-0510-038_detalhe1.jpg?ts=1588846174?ims=240x240" alt="Product"/>
            </td>
            <td>
              <strong>Tenis ChoShoes</strong>
              <span>R$ 599.99</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline color="#7159c1" size={20} />
                </button>
                <input type="number" readOnly value={2}/>
                <button type="button">
                  <MdAddCircleOutline color="#7159c1" size={20} />
                </button>
              </div>
            </td>
            <td>
              <strong>R$ 1299,98</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#7159c1"/>
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>
      <footer>
        <button type="button">Finalizar pedido</button>
        <Total>
          <span>TOTAL</span>
          <strong>R$ 1594.45</strong>
        </Total>
      </footer>
    </Container>
  )
}
