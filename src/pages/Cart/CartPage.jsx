import React, { useContext, useEffect } from 'react'
import { StoreContext } from '../../Context/StoreContext'

const CartPage = () => {

  const { cartItem, addCartItem, desCartItem, removeCartItem } = useContext(StoreContext);


  console.log(cartItem);


  let totalPrice = 0;

  return (
    <div className='min-h-[40vh]'>

      <div>


        {cartItem.length > 0 ? <>
          
          <div >

            <table className='w-full text-center'>

              <thead className=''>

                <tr className='bg-gray-200 text-gray-900'>

                  <th>Image</th>
                  <th>Title</th>
                  <th>Price </th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Remove</th>

                </tr>

              </thead>

              <tbody>

                {cartItem.length > 0 && cartItem.map(item => {
                  return (
                    <tr key={item.id} className='border-b border-b-slate-200'>

                      <td>
                        <img src={'img/' + item.image} alt="" className=' h-16 mx-auto p-2' />
                      </td>
                      <td>{item.name}</td>
                      <td>{item.price}</td>



                      <td> <div className='flex items-center gap-4 cursor-pointer rounded-full bg-white p-1'>
                        <img src="img/remove_icon_red.png" alt="" onClick={() => {

                          desCartItem(item)

                        }}
                          className='w-9' />
                        <p className='text-[tomato] font-bold text-lg'>{item.quantity}</p>
                        <img src='img/add_icon_green.png' alt="" className='w-9' onClick={() => {

                          addCartItem(item);

                        }} />
                      </div></td>




                      <td className=''>{item.price * item.quantity}</td>


                      <td >

                        <button className='text-xl font-bold bg-red-600 w-10 h-10 rounded-full text-slate-200 hover:bg-red-700' onClick={() => removeCartItem(item.id)}>X</button>

                      </td>


                    </tr>
                  )
                })}


              </tbody>

            </table>


          </div>




          <div className='my-10 w-full max-w-lg'>

            <h2 className='py-2 pb-1 mb-2 text-center text-lg border-b border-gray-400'>Cart Total</h2>



            <table className='w-full '>

              <thead>

                <tr className='bg-gray-200'>
                  <th>Subtotal</th>
                  <th>{
                    cartItem.map(item => {
                      totalPrice = totalPrice + item.price * item.quantity;
                    })}
                    ${totalPrice}
                  </th>
                </tr>


              </thead>

              <tbody className='text-center'>

                <tr className='border-b border-b-slate-200'>
                  <td>Delivery Fee</td>
                  <td>$5</td>
                </tr>

                <tr className='border-b border-b-slate-200 bg-gray-200 font-bold'>
                  <td>Total</td>
                  <td>${totalPrice + 5}</td>
                </tr>




              </tbody>


            </table>

          </div>
        </>

          :

          <p className='py-4 bg-slate-200 text-xl text-[tomato] text-center'>Cart is Empty!</p>
        }


      </div>

    </div>


  )
}

export default CartPage