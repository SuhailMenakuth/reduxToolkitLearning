// import { createSlice } from '@reduxjs/toolkit';


// const initialState = {
    //     answers: {}, 
    //     correctAnswers: { 
        //         goat: 'Minhaj',
        //         place: 'Keralam',
        //         club: 'Manchester United'
        //     },
        //     score: 0, 
        // };
        
        // const quizSlice = createSlice({
            //     name: 'quiz',
            //     initialState,
            //     reducers: {
                //         setAnswer: (state, action) => {
                    //             const { question, answer } = action.payload;
                    //             state.answers[question] = answer;
                    //         },
                    //         calculateScore: (state) => {
                        //             let score = 0;
                        //             for (const question in state.correctAnswers) {
                            //                 if (state.answers[question] === state.correctAnswers[question]) {
                                //                     score++;
                                //                 }
                                //             }
                                //             state.score = score;
                                //         },
                                //     },
                                // });
                                
                                // export const { setAnswer, calculateScore } = quizSlice.actions;
                                // export default quizSlice.reducer;
                                
                                
                                
                                
import * as toolkit from "@reduxjs/toolkit";
const initialState = {
    correctAnswers :{
        goat : "Minhaj",
        place :"kerala",
        club: "Manchester United"
    },
    ansewrs:{},
    score : 0
}
const quizSlice = toolkit.createSlice({
    name:"quiz",
    initialState,
    reducers :{
        setAnswers : (state,action) =>{
            const { question, answer } = action.payload ;
            state.ansewrs[question] = answer
        }, 

        calculateScore : (state) =>{
            let score = 0;
            for (const question in state.correctAnswers){
                if(state.correctAnswers[question] == state.ansewrs[question]){
                    score++;
                }
            }
            state.score = score;

        }
    }

})


export const {setAnswers,calculateScore} = quizSlice.actions;
export default quizSlice.reducer;