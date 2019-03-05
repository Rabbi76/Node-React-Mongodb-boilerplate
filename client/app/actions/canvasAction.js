import { Redirect, browserHistory } from 'react-router'
import axios from 'axios'
// //===================================================================================
// export function addCanvasAction(props, data) {
//     console.log("Action called")
//     console.log(data)
//     return {
        
//       // type of action occurred
//       type: 'SAVE_CANVAS',
//       //payload: counter,
//     };
//   };

  export function addCanvasAction(props, id, canvas) {
    // console.log("Action called")
    // console.log(canvas)
    var url = "";
    var action = "post";
    if (id) {
      url = id;
      action = "put";
    }
    return dispatch => {
      axios[action]("/canvaseRoutes/"+ url, canvas)
        .then(function (response) {
          var msg = "Canvas successfully created.";
          if (action == "put") {
            //msg = "Canvas " + id + " successfully updated.";
          }
          dispatch({
            type: "CLEAR_SELECTED_CANVAS"
           
          });
          // console.log('action dispatch')
          // console.log(id)
          let id= response.data.id;
          if(action=="post"){
            props.history.push('/canvas/'+id)
          }
          else{
            props.history.push('/')
          }
          
          //callback();
          //props.history.push('/canvas')
        })
        .catch(function (error) {
          //var msgs = error.response.data.message;
          dispatch({
            type: "ERROR_ENCOUNTERED",
            //messages: Array.isArray(msgs) ? json : [msgs]
          });
          //callback()
        });
    };
  }


// Get specific Canvas from Database
export function getOneCanvas( id, callback) {

	return dispatch => {
		axios
			.get("/canvaseRoutes/" + id)
			.then(function (response) {
				var resdat = response.data;
				(resdat.formtype = "edit"), (resdat.error = "");
				dispatch({
					type: "SELECT_CANVAS",
					payload: {
						selected_canvas: resdat
					}
				});
				callback(resdat, false);
			})
			.catch(function (error) {
				//var msgs = error.response.data.message;
				dispatch({
					type: "ERROR_ENCOUNTERED",
					//messages: Array.isArray(msgs) ? json : [msgs]
				});
				if (error.response) {
					callback(null, error.response);
				}
			});
	};
}

export function getAllCanvas( data) {

	return dispatch => {
		axios
			.get("/canvaseRoutes/")
			.then(function (response) {
				var resdat = response.data;
				(resdat.formtype = "edit"), (resdat.error = "");
				dispatch({
					type: "GET_ALL_CANVAS",
					payload: {
						allCanvas: resdat
					}
				});
			})
			.catch(function (error) {
				//var msgs = error.response.data.message;
				dispatch({
					type: "ERROR_ENCOUNTERED",
					//messages: Array.isArray(msgs) ? json : [msgs]
				});
				if (error.response) {
				}
			});
	};
}
  
// export const addCanvasAction = (props, data) => {
//   return async dispatch => {
//       console.log("Action called")
//       console.log(data)
//     dispatch({
//       type: 'CLEAR_MESSAGES'
//     });
//     try {
//         console.log(hello)
//     //   const res = await axios.post('/people/addCustomer', {
//     //     headers: { 'Content-Type': 'application/json' },
//     //     addCustomerInfo: data
//     //   })
      
//     //   var msg = res.data;
//     //   dispatch({
//     //     type: 'ADD_CUSTOMER',        
//     //      messages: Array.isArray(msg) ? msg : [msg]
//     //   });
//     //   props.history.push('/peoples')
//     } catch (e) {
//       console.log("error found")
//     }
//   };
// };