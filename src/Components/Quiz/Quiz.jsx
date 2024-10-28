import React from 'react';
import { useDispatch } from 'react-redux';
import { setAnswers } from '../Quiz/QuizSlice';
import { useNavigate } from 'react-router-dom';

const Quiz = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleOptionChange = (question, answer) => {
        dispatch(setAnswers({ question, answer }));
    };

    const handleSubmit = () => {
        navigate('/result');
    };

    return (
        <div>
            <h1>Answer the questions</h1>

            <h3>Who is the GOAT in football?</h3>
            <label>
                <input
                    type="radio"
                    name="goat"
                    value="Ronaldo"
                    onChange={() => handleOptionChange('goat', 'Ronaldo')}
                />
                Ronaldo
            </label>
            <label>
                <input
                    type="radio"
                    name="goat"
                    value="Minhaj"
                    onChange={() => handleOptionChange('goat', 'Minhaj')}
                />
                Minhaj
            </label>
            <label>
                <input
                    type="radio"
                    name="goat"
                    value="Messi"
                    onChange={() => handleOptionChange('goat', 'Messi')}
                />
                Messi
            </label>

            <h3>Which place is called God's Own Country?</h3>
            <label>
                <input
                    type="radio"
                    name="place"
                    value="Keralam"
                    onChange={() => handleOptionChange('place', 'Keralam')}
                />
                Keralam
            </label>
            <label>
                <input
                    type="radio"
                    name="place"
                    value="UP"
                    onChange={() => handleOptionChange('place', 'UP')}
                />
                UP
            </label>

            <h3>Which is the best football club in the world?</h3>
            <label>
                <input
                    type="radio"
                    name="club"
                    value="Manchester United"
                    onChange={() =>
                        handleOptionChange('club', 'Manchester United')
                    }
                />
                Manchester United
            </label>
            <label>
                <input
                    type="radio"
                    name="club"
                    value="Liverpool"
                    onChange={() => handleOptionChange('club', 'Liverpool')}
                />
                Liverpool
            </label>

            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default Quiz;


