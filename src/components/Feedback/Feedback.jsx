import { useState } from "react";
import { Buttons } from "./Buttons/Buttons";
import { Statistics } from "./Statistic/Statistics";
import { Section } from "./Section/Section";
import { Notification } from "./Notification.jsx/Notification";

export default function Feedback() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const feedbackTypes = { good, neutral, bad };

    const leaveFeedback = key => {
        switch(key) {
            case 'good': setGood(good => good + 1);
            break;

            case 'neutral': setNeutral(neutral => neutral + 1);
            break;

            case 'bad': setBad(bad => bad + 1);
            break;

            default: return;
        }
    };

    const countTotalFeedback = () => {
        return Math.round(good + neutral + bad);
    };

    const countPositiveFeedbackPercentage = () => {
        return Math.round((good * 100) / countTotalFeedback());
    };

    return (
        <>
            <Section title="Please leave feedback">
                <Buttons options={Object.keys(feedbackTypes)} onLeaveFeedback={leaveFeedback} />
            </Section>
            <Section title="Statistics">
                {countTotalFeedback() ?
                    (<Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()} />) :
                    (<Notification message="No feedback given" />)}
            </Section>
        </>
    );
};

// class Feedback extends Component {
//     state = {
//         good: 0,
//         neutral: 0,
//         bad: 0
//     };

//     leaveFeedback = (event) => { 
//         this.setState(prevState => ({
//             [event]: prevState[event] + 1
//         }));
//     };

//     countTOtalFeedback = () => {
//         return Math.round(this.state.good + this.state.neutral + this.state.bad);
//     };

//     countPositiveFeedbackPercentage = () => {
//         return Math.round((this.state.good * 100) / this.countTOtalFeedback());
//     };

//     render() {
//         const { good, neutral, bad } = this.state;
//         return (
//             <>
//                 <Section title="Please leave feedbck">
//                     <Buttons options={Object.keys(this.state)} onLeaveFeedback={this.leaveFeedback} />
//                 </Section>
//                 <Section title="Statistics">
//                     {this.countTOtalFeedback() ?
//                         (<Statistics good={good} neutral={neutral} bad={bad} total={this.countTOtalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />) :
//                         (<Notification message="No feedback given" />)}
//                 </Section>             
//             </>
//         );
//     }   
// };

// export default Feedback;