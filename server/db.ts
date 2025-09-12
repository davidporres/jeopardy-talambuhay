import type { PlayerData, Question } from '$lib/index';

const playerData: PlayerData[] = [];
const TIME_LEFT = 10; // seconds
const sortQuestions = (questions: { points: number; question: string; answer: string; imgSrc?: string; }[]) => questions.sort((a, b) => a.points - b.points).map(q => ({ ...q, answered: false, buzzers: [] as string[] }));
const pastQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question: 'past for 100',
        answer: 'idk',
    },
    {
        points: 200,
        question:
            'past for 200',
        imgSrc: "https://cdn.britannica.com/34/4034-050-91EE1BCF/Flag-Myanmar.jpg",
        answer: 'idk',
    },
    {
        points: 300,
        question:
            'past for 300',
        answer: 'idk',
    },
    {
        points: 400,
        question: 'past for 400',
        answer: 'idk',
    }
]);

const presentQuestions: Question[] =
    sortQuestions([
        {
            points: 100,
            question:
                'present for 100',
            imgSrc: 'https://madera.objects.liquidweb.services/photos/16842-half-dome-closeup-from-glacier-point-steve-montalto-hmi-Rectangle-600x400.jpg',
            answer: 'idk',
        },
        {
            points: 200,
            question:
                'present for 200',
            imgSrc: 'https://lh3.googleusercontent.com/p/AF1QipNsmB0ugJeJxYVrBKpRkNkyiEa6cKLamFZ4r0M=s1360-w1360-h1020',
            answer: 'idk',
        },
        {
            points: 300,
            question: 'present for 300',
            imgSrc: '/programming_language.png',
            answer: 'idk',
        },
        {
            points: 400,
            question:
                'present for 400',
            imgSrc:
                "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjb1tCOwOdOeYcp5iflCvvW95qCqpmNUo-TMIt3ndxzsxzmgmH18iClIIQLPO48ojPg5Rts2AUm9rZBeVPcjnjrjGaLSzCwbipQotY4EhOk3tUoHJjJyZjTqfY5s9MZ5eSkGrrqmom4JXUdHEqE-Ts8E9i-SuFf9xEukJcFBs5NuOhe6ANdODMFYzyV_Q/s16000/Unfinished.jpg",
            answer: 'idk',
        }
    ]);
const futureQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question:
            'What college is this?',
        imgSrc:
            "data:image/jpeg;base64,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",
        answer: 'Princeton',
    },
    {
        points: 200,
        question:
            'future for 200',
        //imgSrc: "https://lh3.googleusercontent.com/p/AF1QipNsmB0ugJeJxYVrBKpRkNkyiEa6cKLamFZ4r0M=s1360-w1360-h1020",
        answer: 'idk',
     },
     {
        points: 300,
        question:
            'future for 300',
        //imgSrc: "https://lh3.googleusercontent.com/p/AF1QipNsmB0ugJeJxYVrBKpRkNkyiEa6cKLamFZ4r0M=s1360-w1360-h1020",
        answer: 'idk',
     },
     {
        points: 400,
        question:
            'future for 400',
        //imgSrc: "https://lh3.googleusercontent.com/p/AF1QipNsmB0ugJeJxYVrBKpRkNkyiEa6cKLamFZ4r0M=s1360-w1360-h1020",
        answer: 'idk',
     },
]);


const categories = [
    {
        title: 'David\'s Past',
        questions: pastQuestions
    },
    {
        title: 'David\'s Present',
        questions: presentQuestions
    },
    {
        title: 'David\'s Future',
        questions: futureQuestions
    }
];

export const state = {
    playerData,
    categories,
    selectedQuestion: null as Question | null | undefined,
    whoControls: null as string | null,
    timeLeft: TIME_LEFT,
    intervalId: null as NodeJS.Timeout | null,
    whoBuzzed: null as string | null,
};

export interface CheckAnswerPayload {
    answer: string;
    question: Question;
    socketId: string;
}