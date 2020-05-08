import { useLocalStorage } from "./useLocalStorage";

export const useForm = ( key, initialValue ) => {
  // email value ✅
  // handlechanges should handle all inputs
  const [ values, setValues ] = useLocalStorage( key, initialValue );

  const handleChanges = e => {
    setValues( {
      ...values,
      [ e.target.name ]: e.target.value
    } );
  };

  // const handleBlur = e => {

  // }

  // const handleValidation

  const clearForm = e => {
    if ( e ) e.preventDefault();
    setValues( initialValue );
  };

  return [ values, handleChanges, clearForm ];
};








// ________________________________________________ //

// JS destructuring -

// destructure objects
//   name matters
//   order does not matter

const myObj = {
  a: "1",
  b: "2",
  c: "3"
};

const { b, c, a } = myObj;

console.log( b, c, a );

// destrcutring arrays
//   names don't matter
//   order matters

const myArr = [ "1", "2", "3" ];

const [ banana, two, apple ] = myArr;

console.log( banana, two, apple );