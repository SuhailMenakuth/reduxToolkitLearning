import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { calculateScore } from '../Quiz/QuizSlice';

const Result = () => {
    const dispatch = useDispatch();
    const score = useSelector((state) => state.quiz.score);

    useEffect(() => {
        dispatch(calculateScore());
    }, [dispatch]);


    const getColor = (score) => {
        switch (score) {
            case 3:
                return 'green';
            case 2:
                return 'yellow';
            case 1:
                return 'blue';
            default:
                return 'black'; 
        }
    };

    return (
        <div>
            <h1>Your Score</h1>
            <p style={{ color: getColor(score) }}>
                You got {score} correct answers!
            </p>
        </div>
    );
};

export default Result;
