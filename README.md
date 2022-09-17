# prop types:

[https://www.youtube.com/watch?v=zLyeWSfTMa8&list=PLC3y8-rFHvwi1AXijGTKM0BKtHzVC-LSK&index=5&ab_channel=Codevolution]

1.  props akare ja ashbe setar type direct define kore deya
2.  children akare string ba onno kichu gele seta define kore deya
3.  children akare jodi kono component jay , tahole tar type hobe React.ReactNode
4.  kono props er value jodi nirdisto kichu hoy, tahole seta direct likhe deya jaay oi component er jekhane prop types define kora hoy , sekhane .. jemon

type StatusProps = {
status: 'loading' | 'success' | 'error'
}

ekhon ei Status component jekhan thekei call koruk, status naame je props ashbe, tar value sunirdisto vabe oi tintar ektai hote hobe.

5. button click er khetre event er type hoy React.MouseEvent< HTMLButtonElement >
6. input event er onChange event er khetre type hoy React.ChangeEvent< HTMLInputElement >
7. jodi css styles props akare ashe, tahole tar type hoy React.CSSProperties
