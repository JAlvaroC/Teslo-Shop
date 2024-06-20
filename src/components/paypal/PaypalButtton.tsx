// // 'use client'
// // import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js'
// // import {
// //   CreateOrderData,
// //   CreateOrderActions,
// //   OnApproveData,
// //   OnApproveActions
// // } from '@paypal/paypal-js'

// // import React from 'react'
// // import { paypalCheckPayment, setTransactionId } from '@/actions'

// // interface Props {
// //   orderId: string
// //   amount: number
// // }

// // export const PaypalButtton = ({ orderId, amount }: Props) => {
// //   const [{ isPending }] = usePayPalScriptReducer()
// //   const rountedAmount = Math.round(amount * 100) / 100
// //   if (isPending) {
// //     return (
// //       <div className='animate-pulse mb-16'>
// //         <div className='h-11 bg-gray-300 rounded' />
// //         <div className='h-11 bg-gray-300 rounded mt-2' />
// //       </div>
// //     )
// //   }
// //   const createOrder = async (
// //     data: CreateOrderData,
// //     actions: CreateOrderActions
// //   ): Promise<string> => {
// //     const transactionId = await actions.order.create({
// //       purchase_units: [
// //         {
// //           invoice_id: orderId,
// //           amount: {
// //             // value: '100.00'
// //             value: `${rountedAmount}`
// //             // currency_code: 'USD'
// //           }
// //         }
// //       ]
// //     })
// //     // console.log('transactionId', { transactionId })
// //     // Todo: guardar el Id en la orden en la base ded datos
// //     // setTransactionId

// //     const { ok } = await setTransactionId(orderId, transactionId)
// //     if (!ok) {
// //       throw new Error('No sepudo actualizar la orden')
// //     }
// //     return transactionId
// //   }
// //   const onApprove = async (data: OnApproveData, actions: OnApproveActions) => {
// //     console.log('onApprove')
// //     const details = await actions.order?.capture()
// //     if (!details) return
// //     await paypalCheckPayment(details.id)
// //   }
// //   return <PayPalButtons createOrder={createOrder} onApprove={onApprove} />
// // }

// 'use client'

// import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js'
// import {
//   CreateOrderData,
//   CreateOrderActions,
//   OnApproveActions,
//   OnApproveData
// } from '@paypal/paypal-js'
// import { paypalCheckPayment, setTransactionId } from '@/actions'

// interface Props {
//   orderId: string
//   amount: number
// }

// export const PayPalButton = ({ orderId, amount }: Props) => {
//   const [{ isPending }] = usePayPalScriptReducer()

//   const rountedAmount = Math.round(amount * 100) / 100 //123.23

//   if (isPending) {
//     return (
//       <div className='animate-pulse mb-16'>
//         <div className='h-11 bg-gray-300 rounded' />
//         <div className='h-11 bg-gray-300 rounded mt-2' />
//       </div>
//     )
//   }

//   const createOrder = async (
//     data: CreateOrderData,
//     actions: CreateOrderActions
//   ): Promise<string> => {
//     const transactionId = await actions.order.create({
//       purchase_units: [
//         {
//           invoice_id: orderId,
//           amount: {
//             // currency_code:'USD'
//             value: `${rountedAmount}`
//             // ,
//           }
//         }
//       ]
//     })

//     const { ok } = await setTransactionId(orderId, transactionId)
//     if (!ok) {
//       throw new Error('No se pudo actualizar la orden')
//     }

//     return transactionId
//   }

//   const onApprove = async (data: OnApproveData, actions: OnApproveActions) => {
//     const details = await actions.order?.capture()
//     if (!details) return

//     await paypalCheckPayment(details.id)
//   }

//   return (
//     <div className='relative z-0'>
//       <PayPalButtons createOrder={createOrder} onApprove={onApprove} />
//     </div>
//   )
// }
'use client'

import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js'
import {
  CreateOrderData,
  CreateOrderActions,
  OnApproveActions,
  OnApproveData
} from '@paypal/paypal-js'
import { paypalCheckPayment, setTransactionId } from '@/actions'

interface Props {
  orderId: string
  amount: number
}

export const PayPalButton = ({ orderId, amount }: Props) => {
  const [{ isPending }] = usePayPalScriptReducer()

  const rountedAmount = Math.round(amount * 100) / 100 //123.23

  if (isPending) {
    return (
      <div className='animate-pulse mb-16'>
        <div className='h-11 bg-gray-300 rounded' />
        <div className='h-11 bg-gray-300 rounded mt-2' />
      </div>
    )
  }

  const createOrder = async (
    data: CreateOrderData,
    actions: CreateOrderActions
  ): Promise<string> => {
    const transactionId = await actions.order.create({
      purchase_units: [
        {
          invoice_id: orderId,
          amount: {
            value: `${rountedAmount}`,
            currency_code: 'USD'
          }
        }
      ],
      intent: 'CAPTURE'
    })

    const { ok } = await setTransactionId(orderId, transactionId)
    if (!ok) {
      throw new Error('No se pudo actualizar la orden')
    }

    return transactionId
  }

  const onApprove = async (data: OnApproveData, actions: OnApproveActions) => {
    const details = await actions.order?.capture()
    // if (!details) return
    if (!details || !details.id) return

    await paypalCheckPayment(details.id)
  }

  return (
    <div className='relative z-0'>
      <PayPalButtons createOrder={createOrder} onApprove={onApprove} />
    </div>
  )
}