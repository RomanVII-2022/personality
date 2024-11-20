--
-- PostgreSQL database dump
--

-- Dumped from database version 17.1 (Debian 17.1-1.pgdg120+1)
-- Dumped by pg_dump version 17.1 (Debian 17.1-1.pgdg120+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: SequelizeMeta; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);


ALTER TABLE public."SequelizeMeta" OWNER TO postgres;

--
-- Name: answers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.answers (
    id integer NOT NULL,
    answer character varying(255) NOT NULL,
    "questionId" integer NOT NULL,
    category character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.answers OWNER TO postgres;

--
-- Name: answers_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.answers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.answers_id_seq OWNER TO postgres;

--
-- Name: answers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.answers_id_seq OWNED BY public.answers.id;


--
-- Name: questions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.questions (
    id integer NOT NULL,
    question character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.questions OWNER TO postgres;

--
-- Name: questions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.questions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.questions_id_seq OWNER TO postgres;

--
-- Name: questions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.questions_id_seq OWNED BY public.questions.id;


--
-- Name: answers id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.answers ALTER COLUMN id SET DEFAULT nextval('public.answers_id_seq'::regclass);


--
-- Name: questions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.questions ALTER COLUMN id SET DEFAULT nextval('public.questions_id_seq'::regclass);


--
-- Data for Name: SequelizeMeta; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."SequelizeMeta" (name) FROM stdin;
20241116111426-create-question.js
20241116112347-create-answer.js
\.


--
-- Data for Name: answers; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.answers (id, answer, "questionId", category, "createdAt", "updatedAt") FROM stdin;
5	Energized and excited	1	extrovert	2024-11-16 12:48:59.115838+00	2024-11-16 12:48:59.115838+00
6	Satisfied but need rest	1	introvert	2024-11-16 12:48:59.115838+00	2024-11-16 12:48:59.115838+00
7	Reflect on social interactions	1	introvert	2024-11-16 12:48:59.115838+00	2024-11-16 12:48:59.115838+00
8	Ready to plan the next outing	1	extrovert	2024-11-16 12:48:59.115838+00	2024-11-16 12:48:59.115838+00
9	Being outdoors or with people	2	extrovert	2024-11-16 12:51:26.348783+00	2024-11-16 12:51:26.348783+00
10	Spending time alone	2	introvert	2024-11-16 12:51:26.348783+00	2024-11-16 12:51:26.348783+00
11	Mix of social and personal time	2	extrovert	2024-11-16 12:51:26.348783+00	2024-11-16 12:51:26.348783+00
12	Quiet hobbies or self-reflection	2	introvert	2024-11-16 12:51:26.348783+00	2024-11-16 12:51:26.348783+00
13	Take charge of discussions	3	extrovert	2024-11-16 12:52:17.510782+00	2024-11-16 12:52:17.510782+00
14	Listen and observe	3	introvert	2024-11-16 12:52:17.510782+00	2024-11-16 12:52:17.510782+00
15	Contribute occasionally	3	introvert	2024-11-16 12:52:17.510782+00	2024-11-16 12:52:17.510782+00
16	Drive group dynamics	3	extrovert	2024-11-16 12:52:17.510782+00	2024-11-16 12:52:17.510782+00
17	Excited to introduce yourself	4	extrovert	2024-11-16 12:53:08.093756+00	2024-11-16 12:53:08.093756+00
18	Reserved or cautious	4	introvert	2024-11-16 12:53:08.093756+00	2024-11-16 12:53:08.093756+00
19	Smile but stay quiet	4	introvert	2024-11-16 12:53:08.093756+00	2024-11-16 12:53:08.093756+00
20	Eagerly start conversations	4	extrovert	2024-11-16 12:53:08.093756+00	2024-11-16 12:53:08.093756+00
21	Fast-paced, interactive environment	5	extrovert	2024-11-16 12:53:57.375677+00	2024-11-16 12:53:57.375677+00
22	Quiet, focused environment	5	introvert	2024-11-16 12:53:57.375677+00	2024-11-16 12:53:57.375677+00
23	Blend of collaboration and quiet work	5	introvert	2024-11-16 12:53:57.375677+00	2024-11-16 12:53:57.375677+00
24	Constant communication	5	extrovert	2024-11-16 12:53:57.375677+00	2024-11-16 12:53:57.375677+00
25	Speak frequently and share ideas	6	extrovert	2024-11-16 12:54:53.436185+00	2024-11-16 12:54:53.436185+00
26	Speak rarely, listen attentively	6	introvert	2024-11-16 12:54:53.436185+00	2024-11-16 12:54:53.436185+00
27	Interject selectively	6	introvert	2024-11-16 12:54:53.436185+00	2024-11-16 12:54:53.436185+00
28	Lead conversations often	6	extrovert	2024-11-16 12:54:53.436185+00	2024-11-16 12:54:53.436185+00
29	With social activities	7	extrovert	2024-11-16 12:55:44.140666+00	2024-11-16 12:55:44.140666+00
30	With solitude and rest	7	introvert	2024-11-16 12:55:44.140666+00	2024-11-16 12:55:44.140666+00
31	Connecting with a few people	7	introvert	2024-11-16 12:55:44.140666+00	2024-11-16 12:55:44.140666+00
32	Hosting gatherings	7	extrovert	2024-11-16 12:55:44.140666+00	2024-11-16 12:55:44.140666+00
33	Talk to friends or colleagues	8	extrovert	2024-11-16 12:57:47.566779+00	2024-11-16 12:57:47.566779+00
34	Reflect internally or write thoughts	8	introvert	2024-11-16 12:57:47.566779+00	2024-11-16 12:57:47.566779+00
35	Research or analyze options alone	8	introvert	2024-11-16 12:57:47.566779+00	2024-11-16 12:57:47.566779+00
36	Share concerns openly	8	extrovert	2024-11-16 12:57:47.566779+00	2024-11-16 12:57:47.566779+00
37	Mingle and socialize	9	extrovert	2024-11-16 12:57:47.566779+00	2024-11-16 12:57:47.566779+00
38	Find a quiet space	9	introvert	2024-11-16 12:57:47.566779+00	2024-11-16 12:57:47.566779+00
39	Make new connections	9	extrovert	2024-11-16 12:57:47.566779+00	2024-11-16 12:57:47.566779+00
40	Stick with a small group	9	introvert	2024-11-16 12:57:47.566779+00	2024-11-16 12:57:47.566779+00
41	Excited and open	10	extrovert	2024-11-16 12:57:47.566779+00	2024-11-16 12:57:47.566779+00
42	Cautious or reserved	10	introvert	2024-11-16 12:57:47.566779+00	2024-11-16 12:57:47.566779+00
43	Approach with caution	10	introvert	2024-11-16 12:57:47.566779+00	2024-11-16 12:57:47.566779+00
44	Ready to learn more about them	10	extrovert	2024-11-16 12:57:47.566779+00	2024-11-16 12:57:47.566779+00
45	Group outings and social events	11	extrovert	2024-11-16 13:10:21.272414+00	2024-11-16 13:10:21.272414+00
46	Quiet retreats	11	introvert	2024-11-16 13:10:21.272414+00	2024-11-16 13:10:21.272414+00
47	Balanced activities with small groups	11	introvert	2024-11-16 13:10:21.272414+00	2024-11-16 13:10:21.272414+00
48	Leading group trips	11	extrovert	2024-11-16 13:10:21.272414+00	2024-11-16 13:10:21.272414+00
49	Raise hand to ask questions	12	extrovert	2024-11-16 13:10:21.272414+00	2024-11-16 13:10:21.272414+00
50	Take notes quietly	12	introvert	2024-11-16 13:10:21.272414+00	2024-11-16 13:10:21.272414+00
51	Ask questions privately later	12	introvert	2024-11-16 13:10:21.272414+00	2024-11-16 13:10:21.272414+00
52	Engage in open discussions	12	extrovert	2024-11-16 13:10:21.272414+00	2024-11-16 13:10:21.272414+00
53	Discuss with others	13	extrovert	2024-11-16 13:10:21.272414+00	2024-11-16 13:10:21.272414+00
54	Think it through privately	13	introvert	2024-11-16 13:10:21.272414+00	2024-11-16 13:10:21.272414+00
55	Seek advice one-on-one	13	introvert	2024-11-16 13:10:21.272414+00	2024-11-16 13:10:21.272414+00
56	Brainstorm in groups	13	extrovert	2024-11-16 13:10:21.272414+00	2024-11-16 13:10:21.272414+00
57	Take the lead or speak often	14	extrovert	2024-11-16 13:12:11.450346+00	2024-11-16 13:12:11.450346+00
58	Support from behind	14	introvert	2024-11-16 13:12:11.450346+00	2024-11-16 13:12:11.450346+00
59	Offer suggestions quietly	14	introvert	2024-11-16 13:12:11.450346+00	2024-11-16 13:12:11.450346+00
60	Propose and direct plans	14	extrovert	2024-11-16 13:12:11.450346+00	2024-11-16 13:12:11.450346+00
61	Enjoy it	15	extrovert	2024-11-16 13:12:11.450346+00	2024-11-16 13:12:11.450346+00
62	Avoid or limit it	15	introvert	2024-11-16 13:12:11.450346+00	2024-11-16 13:12:11.450346+00
63	Participate cautiously	15	introvert	2024-11-16 13:12:11.450346+00	2024-11-16 13:12:11.450346+00
64	Actively seek it out	15	extrovert	2024-11-16 13:12:11.450346+00	2024-11-16 13:12:11.450346+00
65	Comfortable and natural	16	extrovert	2024-11-16 13:12:11.450346+00	2024-11-16 13:12:11.450346+00
66	Anxious or nervous	16	introvert	2024-11-16 13:12:11.450346+00	2024-11-16 13:12:11.450346+00
67	Manageable with effort	16	introvert	2024-11-16 13:12:11.450346+00	2024-11-16 13:12:11.450346+00
68	Effortlessly connects	16	extrovert	2024-11-16 13:12:11.450346+00	2024-11-16 13:12:11.450346+00
69	Being around others	17	extrovert	2024-11-16 13:14:29.859799+00	2024-11-16 13:14:29.859799+00
70	Being alone	17	introvert	2024-11-16 13:14:29.859799+00	2024-11-16 13:14:29.859799+00
71	Small group interactions	17	introvert	2024-11-16 13:14:29.859799+00	2024-11-16 13:14:29.859799+00
72	Hosting social events	17	extrovert	2024-11-16 13:14:29.859799+00	2024-11-16 13:14:29.859799+00
73	Reply quickly	18	extrovert	2024-11-16 13:14:29.859799+00	2024-11-16 13:14:29.859799+00
74	Think before replying	18	introvert	2024-11-16 13:14:29.859799+00	2024-11-16 13:14:29.859799+00
75	Consider words carefully	18	introvert	2024-11-16 13:14:29.859799+00	2024-11-16 13:14:29.859799+00
76	Respond with enthusiasm	18	extrovert	2024-11-16 13:14:29.859799+00	2024-11-16 13:14:29.859799+00
77	Teams and collaboration	19	extrovert	2024-11-16 13:14:29.859799+00	2024-11-16 13:14:29.859799+00
78	Independent tasks	19	introvert	2024-11-16 13:14:29.859799+00	2024-11-16 13:14:29.859799+00
79	One-on-one partnerships	19	introvert	2024-11-16 13:14:29.859799+00	2024-11-16 13:14:29.859799+00
80	Leading team efforts	19	extrovert	2024-11-16 13:14:29.859799+00	2024-11-16 13:14:29.859799+00
81	Large gatherings	20	extrovert	2024-11-16 13:14:29.859799+00	2024-11-16 13:14:29.859799+00
82	Small, intimate settings	20	introvert	2024-11-16 13:14:29.859799+00	2024-11-16 13:14:29.859799+00
83	Moderate-sized gatherings	20	introvert	2024-11-16 13:14:29.859799+00	2024-11-16 13:14:29.859799+00
84	Hosting grand parties	20	extrovert	2024-11-16 13:14:29.859799+00	2024-11-16 13:14:29.859799+00
\.


--
-- Data for Name: questions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.questions (id, question, "createdAt", "updatedAt") FROM stdin;
1	How do you feel after a long social event?	2024-11-16 11:48:38.537+00	2024-11-16 11:48:38.537+00
2	What do you usually prefer during weekends?	2024-11-16 11:49:18.95+00	2024-11-16 11:49:18.95+00
3	In group conversations, you usually:	2024-11-16 11:49:40.211+00	2024-11-16 11:49:40.211+00
4	When meeting new people, you feel:	2024-11-16 11:50:01.194+00	2024-11-16 11:50:01.194+00
5	What type of work environment do you thrive in?	2024-11-16 11:50:19.254+00	2024-11-16 11:50:19.254+00
6	During a meeting, you are likely to:	2024-11-16 11:50:37.251+00	2024-11-16 11:50:37.251+00
7	How do you recharge after a tiring day?	2024-11-16 11:51:05.137+00	2024-11-16 11:51:05.137+00
8	If you have a problem, you usually:	2024-11-16 11:51:24.705+00	2024-11-16 11:51:24.705+00
9	At a party, you typically:	2024-11-16 11:51:40.608+00	2024-11-16 11:51:40.608+00
10	How do you feel about making new friends?	2024-11-16 11:51:56.661+00	2024-11-16 11:51:56.661+00
11	Your ideal vacation involves:	2024-11-16 12:34:05.88588+00	2024-11-16 12:34:05.88588+00
12	In a classroom or workshop, you usually:	2024-11-16 12:34:05.88588+00	2024-11-16 12:34:05.88588+00
13	When making decisions, you prefer:	2024-11-16 12:34:05.88588+00	2024-11-16 12:34:05.88588+00
14	During a group project, you prefer:	2024-11-16 12:34:05.88588+00	2024-11-16 12:34:05.88588+00
15	How do you handle small talk?	2024-11-16 12:34:05.88588+00	2024-11-16 12:34:05.88588+00
16	How do you feel about public speaking?	2024-11-16 12:34:05.88588+00	2024-11-16 12:34:05.88588+00
17	What energizes you most?	2024-11-16 12:34:05.88588+00	2024-11-16 12:34:05.88588+00
18	When messaging someone, you:	2024-11-16 12:34:05.88588+00	2024-11-16 12:34:05.88588+00
19	Do you prefer working with:	2024-11-16 12:34:05.88588+00	2024-11-16 12:34:05.88588+00
20	What’s your ideal social scenario?	2024-11-16 12:34:05.88588+00	2024-11-16 12:34:05.88588+00
\.


--
-- Name: answers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.answers_id_seq', 84, true);


--
-- Name: questions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.questions_id_seq', 20, true);


--
-- Name: SequelizeMeta SequelizeMeta_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);


--
-- Name: answers answers_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.answers
    ADD CONSTRAINT answers_pkey PRIMARY KEY (id);


--
-- Name: questions questions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.questions
    ADD CONSTRAINT questions_pkey PRIMARY KEY (id);


--
-- Name: answers answers_questionId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.answers
    ADD CONSTRAINT "answers_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES public.questions(id);


--
-- PostgreSQL database dump complete
--

