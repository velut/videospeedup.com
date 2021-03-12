import { useState } from 'react';

const minute = 60 * 1000;
const week = 7 * 24 * 60 * 60 * 1000;

export function FeedbackForm() {
    const now = new Date();
    const feedbackDate = new Date(localStorage.feedbackDate ?? now);
    const diff = now.getTime() - feedbackDate.getTime();

    if (diff >= week) {
        localStorage.removeItem('feedbackValue');
        localStorage.removeItem('feedbackDate');
    }

    const [feedback, setFeedback] = useState<string | undefined>(
        localStorage.feedbackValue
    );

    const submitFeedback = ({ feedback }: { feedback: string }) => {
        if (!localStorage.feedbackValue) {
            localStorage.feedbackValue = feedback;
            localStorage.feedbackDate = new Date().toISOString();

            window.plausible('Feedback', { props: { value: feedback } });

            setFeedback(feedback);
        }
    };

    if (diff > minute && diff < week) {
        return null;
    }

    return (
        <div className="flex items-center justify-center">
            <div className="flex-col items-center justify-center flex-grow max-w-md p-4 space-y-2 border border-gray-300 rounded shadow-md dark:border-gray-700">
                <span className="block text-lg text-center">
                    {!feedback
                        ? 'Did you find this website useful?'
                        : 'Thank you for your feedback!'}
                </span>

                <div className="flex justify-center space-x-2">
                    <button
                        className={`flex items-center justify-center p-2 rounded ${
                            !feedback ? 'hover:bg-green-500' : 'cursor-default'
                        } ${feedback === 'yes' ? 'bg-green-500' : ''}`}
                        title="Yes"
                        onClick={(e) => {
                            e.preventDefault();
                            submitFeedback({ feedback: 'yes' });
                        }}
                        disabled={!!feedback}
                    >
                        <span role="img" aria-label="Yes">
                            👍
                        </span>
                    </button>

                    <button
                        className={`flex items-center justify-center p-2 rounded ${
                            !feedback ? 'hover:bg-red-500' : 'cursor-default'
                        } ${feedback === 'no' ? 'bg-red-500' : ''}`}
                        title="No"
                        onClick={(e) => {
                            e.preventDefault();
                            submitFeedback({ feedback: 'no' });
                        }}
                        disabled={!!feedback}
                    >
                        <span role="img" aria-label="No">
                            👎
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}
