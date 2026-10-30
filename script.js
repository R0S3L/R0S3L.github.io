(function(){
var STAGES=[
  ["prog","Programming basics"],["algo","Data structures and algorithms"],["sys","Systems and hardware"],["net","Networks and security"],
  ["web","How the web works"],["front","Frontend"],["back","Backend"],["db","Databases"],
  ["ai","AI and data"],["git","Git and version control"],["team","Teamwork and process"],["ship","Deploy and cloud"],["fix","Debugging and testing"]
];
var SN={}; STAGES.forEach(function(s){SN[s[0]]=s[1]});

/* [category, term, russian, level, definition, example, {ff, say}] */
var T=[
["prog","variable","переменная","A2","A named place in memory that stores a value.","let age = 20;"],
["prog","constant","константа","A2","A value that cannot change after it is set.","const PI = 3.14;"],
["prog","data type","тип данных","A2","The kind of value: a number, a string, a boolean and so on.","age is an integer; name is a string."],
["prog","function","функция","A2","A named block of code that does one job and can be reused.","function add(a, b) { return a + b; }"],
["prog","parameter","параметр","B1","A name in a function definition that receives a value.","In add(a, b), a and b are parameters.",{ff:"An argument is the real value you pass in; a parameter is the name that receives it."}],
["prog","argument","аргумент","B1","The actual value passed to a function when you call it.","add(2, 3): 2 and 3 are arguments.",{ff:"Not “спор”. In code it is a value passed to a function."}],
["prog","loop","цикл","A2","Code that repeats until a condition changes.","for (let i = 0; i < 5; i++) { print(i); }"],
["prog","condition","условие","A2","An expression that is true or false and decides which code runs.","if (age >= 18) { allow(); }"],
["prog","boolean","логический тип","B1","A value that is either true or false.","isLoggedIn = true",{say:"Pronounced BOO-lee-an."}],
["prog","string","строка","A2","Text stored as a sequence of characters.","const name = \"Ann\";",{ff:"Also a rope or a thread. In code it is text."}],
["prog","array","массив","A2","An ordered list of items, accessed by index.","const nums = [4, 8, 15];"],
["prog","object","объект","B1","A thing that groups data and the actions that work with it.","user = { name: \"Ann\", age: 20 }"],
["prog","class","класс","B1","A blueprint for creating objects.","class Car { drive() { } }",{ff:"Not a school class."}],
["prog","method","метод","B1","A function that belongs to an object or a class.","list.append(5)"],
["prog","inheritance","наследование","B2","A class takes properties and methods from another class.","Dog inherits from Animal.",{ff:"Not money after death. In code it is reuse of a parent class."}],
["prog","algorithm","алгоритм","A2","A step-by-step set of instructions that solves a problem.","Binary search is a fast algorithm.",{say:"Stress the first syllable: AL-go-ri-thm."}],
["prog","recursion","рекурсия","B2","A function that calls itself to solve a smaller version of a problem.","factorial(n) calls factorial(n - 1)."],
["prog","compiler","компилятор","B1","A program that translates source code into machine code.","GCC is a C compiler."],
["prog","interpreter","интерпретатор","B1","A program that reads and runs code line by line.","Python code runs in an interpreter.",{ff:"Not a human translator."}],
["prog","source code","исходный код","A2","Code written by a programmer in a programming language.","Open source means anyone can read the source code."],
["prog","comment","комментарий","A2","A note in the code that the computer ignores.","// check user input"],
["prog","pointer","указатель","B2","A variable that stores the memory address of another value.","int *p = &x;"],
["prog","scope","область видимости","B2","The part of a program where a name can be used.","The variable i exists only in the loop scope.",{ff:"Not binoculars. In code it is the range where a name is visible."}],
["prog","null","null (пустое значение)","B1","A special value that means “no value”.","user = null;"],
["prog","syntax","синтаксис","B1","The rules for writing code correctly.","Syntax error: missing bracket.",{say:"Stress the first syllable: SIN-tax."}],

["algo","data structure","структура данных","B1","A way to organize data so it is easy to use.","Arrays and trees are data structures."],
["algo","linked list","связный список","B1","A chain of items where each item points to the next one.","Insert at the head of a linked list in constant time."],
["algo","stack","стек","B1","A collection where the last item added is the first one removed (LIFO).","The undo button uses a stack."],
["algo","queue","очередь","A2","A collection where the first item added is the first one removed (FIFO).","Print jobs wait in a queue.",{say:"Pronounced like the letter Q."}],
["algo","tree","дерево","A2","Data organized as nodes with parent and child links.","The DOM is a tree."],
["algo","graph","граф","B1","Nodes connected by edges.","A road map is a graph.",{ff:"Not only a chart. In algorithms it means nodes and edges."}],
["algo","node","узел","B1","One element of a tree, a list or a graph.","Each node stores a value."],
["algo","hash table","хеш-таблица","B2","A structure that finds values quickly by a key.","A Python dictionary is a hash table."],
["algo","dictionary","словарь (ключ-значение)","B1","A collection of key and value pairs.","ages = {\"Ann\": 20}",{ff:"Not a book of words. In code it is a key-value collection."}],
["algo","sorting","сортировка","A2","Putting items in order.","Sort the list by date."],
["algo","binary search","бинарный поиск","B2","Finding an item in a sorted list by halving the range each step.","Binary search finds a name among a million in 20 steps."],
["algo","iteration","итерация","B1","One pass through a loop, or the act of repeating steps.","Each iteration adds one item."],
["algo","time complexity","временная сложность","B2","How the running time grows as the input grows.","Bubble sort has O(n²) time complexity."],
["algo","Big O notation","О-большое (запись сложности)","B2","A notation that shows how fast an algorithm grows in time or memory.","Binary search is O(log n).",{say:"Say: “big oh of n”."}],

["sys","operating system","операционная система","A2","Software that manages the computer and runs other programs.","Windows and Linux are operating systems."],
["sys","kernel","ядро","B2","The core part of an operating system.","The kernel manages memory and devices.",{say:"Pronounced KER-nel, like “colonel”."}],
["sys","process","процесс","B1","A running program with its own memory.","Open Task Manager to see each process."],
["sys","thread","поток выполнения","B2","A smaller unit of work inside a process.","The app downloads files in a separate thread.",{ff:"Not a sewing thread."}],
["sys","RAM","оперативная память","A2","Fast temporary memory used by running programs.","This laptop has 16 GB of RAM.",{say:"Said as a word: “ram”."}],
["sys","CPU","процессор","A2","The main chip that runs instructions.","The CPU is at 100% usage.",{say:"Say the letters: C-P-U."}],
["sys","GPU","видеокарта, графический процессор","B1","A chip built for graphics and parallel computing.","Training a model needs a powerful GPU.",{say:"Say the letters: G-P-U."}],
["sys","storage","накопитель, хранилище","A2","Long-term space for files, such as an SSD or a hard drive.","The SSD has 512 GB of storage."],
["sys","file system","файловая система","B1","The way an operating system organizes and stores files.","NTFS is a Windows file system."],
["sys","driver","драйвер","B1","Software that lets the operating system work with a device.","Update the graphics driver.",{ff:"Not a person who drives."}],
["sys","terminal","терминал, консоль","A2","A text window where you type commands.","Open the terminal and run ls."],
["sys","shell","оболочка командной строки","B2","A program that reads your commands and runs them.","Bash is a shell.",{ff:"Also the hard outside of an egg or a nut."}],
["sys","permission","права доступа","B1","A rule that says who can read, write or run a file.","Permission denied: you cannot edit this file."],
["sys","firmware","прошивка","B2","Software stored inside a hardware device.","Update the router firmware."],
["sys","virtual machine","виртуальная машина","B2","A software computer that runs inside a real computer.","We test on a Linux virtual machine."],

["net","network","сеть","A2","Computers connected to share data.","Our home network has three devices."],
["net","IP address","IP-адрес","A2","A number that identifies a device on a network.","192.168.0.1 is a local IP address.",{say:"Say the letters: I-P."}],
["net","packet","пакет данных","B1","A small piece of data sent over a network.","Lost packets slow down a video call.",{ff:"Not a bag or a parcel."}],
["net","router","маршрутизатор, роутер","A2","A device that passes data between networks.","Restart the router.",{say:"Said ROW-ter or ROO-ter."}],
["net","bandwidth","пропускная способность","B1","How much data can pass through a connection per second.","Video calls need enough bandwidth."],
["net","latency","задержка","B2","The time data takes to travel from sender to receiver.","Low latency matters in online games.",{say:"LAY-ten-see."}],
["net","firewall","межсетевой экран, брандмауэр","B1","A system that blocks unwanted network traffic.","The firewall blocks port 22."],
["net","encryption","шифрование","B1","Turning data into code so only the right people can read it.","HTTPS uses encryption."],
["net","hash","хеш","B2","A fixed-size code made from data, used to check it or store it safely.","Passwords are stored as hashes, not as text.",{say:"In British English “hash” is also the name of the # symbol."}],
["net","VPN","VPN, виртуальная частная сеть","B1","A private, encrypted connection over the internet.","Connect to the university network through a VPN.",{say:"Say the letters: V-P-N."}],
["net","vulnerability","уязвимость","B2","A weakness that attackers can use.","A security patch fixes the vulnerability.",{say:"vul-ner-a-BIL-i-ty."}],
["net","phishing","фишинг","B1","A fake message that tries to steal your data.","Do not click links in phishing emails.",{say:"Pronounced like “fishing”."}],
["net","malware","вредоносное ПО","B1","Software made to harm a system or steal data.","Antivirus software detects malware."],
["net","two-factor authentication","двухфакторная аутентификация","B1","A login that needs a password and a second proof.","Turn on two-factor authentication on GitHub."],
["net","patch","патч, исправление","B1","A small update that fixes a bug or a security hole.","Install the latest patch.",{ff:"Also a piece of cloth sewn on a jacket."}],

["web","client","клиент","A2","A device or program that asks a server for data.","The browser is the client."],
["web","server","сервер","A2","A computer or program that answers requests and sends data back.","The server returns the page in 50 ms."],
["web","request","запрос","A2","A message from the client asking for data or an action.","The browser sends a GET request."],
["web","response","ответ","A2","The data the server sends back after a request.","The response contains JSON and status 200."],
["web","HTTP","протокол HTTP (передачи гипертекста)","A2","The rules browsers and servers use to talk. HTTPS adds encryption.","Always use HTTPS for login forms.",{say:"Say the letters: H-T-T-P."}],
["web","URL","адрес ресурса, ссылка","A2","The full address of a page or file on the web.","https://example.com/blog?page=2",{say:"Say the letters: U-R-L."}],
["web","domain","домен","A2","The name of a site, such as example.com.","We bought a new domain for the project."],
["web","DNS","служба доменных имён","B1","A system that turns a domain name into an IP address.","The site is down because the DNS record is wrong.",{say:"Say the letters: D-N-S."}],
["web","hosting","хостинг","A2","A service that stores your site and keeps it online.","Free hosting is enough for a student project."],
["web","cache","кэш","B1","A saved copy of data so it loads faster next time.","Clear the cache and reload the page.",{say:"Pronounced like “cash”."}],

["front","markup","разметка","B1","Code that describes the structure of a page. HTML is a markup language.","Valid markup helps screen readers.",{ff:"Not “наценка”. That is the business meaning of markup."}],
["front","tag","тег","A2","A keyword in angle brackets that defines an HTML element.","<h1> is a heading tag."],
["front","attribute","атрибут","B1","Extra information written inside a tag.","<img src=\"cat.png\" alt=\"A cat\">"],
["front","selector","селектор","B1","A pattern that CSS uses to choose elements to style.",".btn:hover { color: red; }"],
["front","layout","вёрстка, макет","B1","How the blocks are arranged on a page.","Flexbox makes the layout easier."],
["front","responsive","адаптивный","B1","Changes to fit any screen size.","The site is responsive on phones.",{ff:"Not “отзывчивый” as in friendly support. It is about screen size."}],
["front","DOM","объектная модель документа","B2","The page as a tree of objects that JavaScript can read and change.","document.querySelector('.menu') finds a node in the DOM.",{say:"Said as a word: “dom”."}],
["front","event","событие","A2","Something that happens on a page, such as a click.","Add an event listener to the button."],
["front","component","компонент","B1","A reusable piece of the interface.","The card is a React component."],
["front","state","состояние","B1","The data that describes what the interface looks like right now.","Update the state when the user clicks “Like”.",{ff:"Not “государство” or “штат”. In code it means current data."}],
["front","framework","фреймворк","B1","A structure with rules and tools for building an app. It calls your code.","Vue is a framework; Lodash is a library."],
["front","library","библиотека","B1","A package of ready-made code that you call when you need it.","We use a charting library.",{ff:"In code it is a package, not a place with books."}],

["back","API","программный интерфейс","B1","A way for programs to talk to each other.","The app gets weather data from a public API.",{say:"Say the letters: A-P-I."}],
["back","endpoint","конечная точка","B1","A URL where an API accepts requests.","GET /api/users is an endpoint."],
["back","route","маршрут","B1","A rule that links a URL to the code that handles it.","Add a route for /login.",{say:"Both “root” and “rowt” are used."}],
["back","middleware","промежуточный обработчик","B2","Code that runs between the request and the final handler.","Auth middleware blocks users who are not logged in."],
["back","authentication","аутентификация","B2","Checking who the user is.","Authentication uses a password or a token."],
["back","authorization","авторизация","B2","Checking what the user is allowed to do.","Only admins pass authorization for this page.",{ff:"In Russian “авторизация” often means logging in. In English, logging in is authentication."}],
["back","session","сессия","B1","The period a user stays logged in, usually kept on the server.","The session expires after 30 minutes."],
["back","cookie","куки","A2","A small piece of data the browser stores for a site.","The session id is stored in a cookie.",{ff:"Also a sweet biscuit, but here it is browser data."}],
["back","token","токен","B1","A string that proves who you are.","Send the token in the Authorization header."],
["back","validation","валидация, проверка данных","B2","Checking that input is correct before using it.","Server-side validation rejects empty emails."],

["db","database","база данных","A2","Organized storage for data.","We store users in a PostgreSQL database."],
["db","table","таблица","A2","A set of rows and columns in a database.","The users table has five columns."],
["db","query","запрос к базе","B1","A command that asks the database for data.","SELECT * FROM users WHERE id = 1;",{ff:"Russian uses “запрос” for both request and query. A query goes to a database."}],
["db","primary key","первичный ключ","B1","A unique ID for each row.","id is the primary key of the users table."],
["db","foreign key","внешний ключ","B1","A column that points to a row in another table.","posts.user_id is a foreign key to users.id.",{ff:"“Foreign” here means external, not from another country."}],
["db","migration","миграция","B2","A saved, versioned change to the database structure.","Run the migration to add the “bio” column."],
["db","index","индекс","B2","A structure that speeds up searches in a table.","Add an index on the email column."],
["db","CRUD","CRUD: создание, чтение, обновление, удаление","B1","The four basic data operations: Create, Read, Update, Delete.","The admin panel supports full CRUD.",{say:"Said as a word: “crud”."}],

["ai","artificial intelligence","искусственный интеллект","A2","Software that does tasks that normally need human thinking.","AI can translate text.",{say:"Often shortened to “AI”: say the letters A-I."}],
["ai","machine learning","машинное обучение","B1","A way for computers to learn patterns from data.","Machine learning predicts prices from past data."],
["ai","dataset","набор данных","B1","A collection of data used for analysis or training.","We trained the model on a dataset of 10,000 images."],
["ai","model","модель (обученная)","B1","A program trained on data to make predictions or answers.","The model predicts the next word."],
["ai","training","обучение модели","B1","Showing a model many examples so it learns patterns.","Training took six hours on a GPU."],
["ai","neural network","нейронная сеть","B2","A model made of connected layers, inspired by the brain.","A neural network recognizes handwritten digits."],
["ai","prompt","промпт, запрос к ИИ","B1","The text you give an AI model to tell it what to do.","Write a clear prompt with an example.",{ff:"As an adjective it also means “quick”: a prompt reply."}],
["ai","LLM","большая языковая модель","B2","A large language model trained on huge amounts of text.","Chatbots use an LLM.",{say:"Say the letters: L-L-M."}],
["ai","overfitting","переобучение","B2","A model remembers its training data and fails on new data.","High training accuracy but low test accuracy means overfitting."],
["ai","inference","работа обученной модели","B2","Using a trained model to produce a result.","Inference is faster than training.",{ff:"In everyday English it means a logical conclusion."}],
["ai","bias","смещение, предвзятость","B2","A systematic error or unfairness in data or results.","The dataset has gender bias."],
["ai","data cleaning","очистка данных","B1","Fixing or removing wrong, missing or duplicate data.","Data cleaning takes most of the project time."],
["ai","accuracy","точность","B1","The share of correct answers from a model.","The model has 92% accuracy."],
["ai","visualization","визуализация","B1","Showing data as charts and graphs.","Use a bar chart for the visualization."],

["git","repository","репозиторий","A2","A folder with your project and its full history.","Clone the repository from GitHub.",{say:"Often shortened to “repo”."}],
["git","commit","коммит","A2","A saved snapshot of your changes with a message.","git commit -m \"Fix login bug\"",{ff:"Also means to promise, as in “commit to a deadline”."}],
["git","branch","ветка","A2","A separate line of work copied from the main code.","Create a branch for the new feature.",{ff:"Not “филиал”. In Git it is a line of work."}],
["git","merge","слияние","B1","Combine changes from one branch into another.","Merge the feature branch into main."],
["git","pull request","запрос на слияние","B1","A request to review your changes and add them to a project.","Open a pull request and ask for review.",{ff:"You ask the owner to pull your changes in, not to pull something out."}],
["git","conflict","конфликт","B1","Two changes touch the same lines and Git cannot combine them alone.","Fix the merge conflict in index.html."],
["git","fork","форк","B2","Your own copy of someone else's repository.","Fork the repo, then send a pull request.",{ff:"Also the fork you eat with."}],
["git","clone","клонировать","A2","Download a full copy of a repository.","git clone https://github.com/user/app.git"],
["git","code review","ревью кода","B1","Teammates read your code and give feedback before it is merged.","Thanks for the code review, I fixed your comments."],
["git","issue","задача, тикет","B1","A task, bug report or idea tracked on GitHub.","I opened an issue about the broken menu.",{ff:"On GitHub it is a tracked task, not only a “problem”."}],

["team","requirement","требование","B1","A thing that the software must do.","The client added a new requirement."],
["team","feature","возможность, фича","A2","A part of a product that does something for the user.","We are adding a dark mode feature.",{ff:"Not “внешность”. In IT it is a function of a product."}],
["team","version","версия","A2","A numbered state of the software.","Update to the latest version."],
["team","release","релиз, выпуск","B1","A version of the software given to users.","Release 2.0 comes out on Monday."],
["team","agile","гибкая методология (Agile)","B1","A way of working in short cycles with frequent feedback.","Our team uses agile.",{say:"Said AJ-ile (US) or AJ-eyel (UK)."}],
["team","sprint","спринт","B1","A short work period, often two weeks, in agile.","The sprint ends on Friday.",{ff:"Also a short fast run."}],
["team","backlog","бэклог, список задач","B2","A list of tasks waiting to be done.","Add this bug to the backlog."],
["team","stand-up","стендап, ежедневная планёрка","B1","A short daily team meeting.","At stand-up, say what you did, what you will do and what blocks you."],
["team","deadline","дедлайн, срок сдачи","A2","The date by which work must be finished.","The deadline is Friday."],
["team","stakeholder","заинтересованная сторона","B2","A person who is affected by or interested in the project.","Show the demo to the stakeholders."],
["team","documentation","документация","A2","Text that explains how software works.","Read the documentation first."],
["team","open source","открытый исходный код","B1","Software whose code anyone can read and change.","Linux is open source."],
["team","freelance","фриланс","B1","Working for different clients, not for one company.","She works as a freelance developer."],
["team","intern","стажёр","B1","A person who works to learn, often for a short time.","He is a summer intern."],
["team","tech stack","технологический стек","B1","The set of technologies a project uses.","Our tech stack is React, Node.js and PostgreSQL.",{ff:"Not the stack data structure."}],

["ship","build","сборка","B1","Turn source code into files that are ready to run.","npm run build creates the dist folder."],
["ship","deploy","развёртывание, деплой","B1","Put a project on a server so users can open it.","We deploy to production every Friday."],
["ship","environment","окружение","B1","A setup where the app runs: development, staging or production.","The bug appears only in the production environment.",{ff:"Not only nature. In IT it is a place where code runs."}],
["ship","production","боевая среда, продакшен","B1","The live version used by real users.","Never test on production."],
["ship","CI/CD","непрерывная интеграция и доставка","B2","Automatic testing and deployment after each change.","CI/CD runs the tests on every push.",{say:"Say the letters: C-I, C-D."}],
["ship","scalability","масштабируемость","B2","The ability to handle more users without breaking.","Caching improves scalability."],
["ship","SSL certificate","SSL-сертификат","B2","A file that proves a site is real and enables HTTPS.","The browser warns that the SSL certificate has expired.",{say:"Say the letters: S-S-L."}],
["ship","rollback","откат","B2","A return to the previous working version.","We did a rollback after the crash."],
["ship","cloud","облако, облачные сервисы","A2","Servers on the internet that you rent instead of owning.","We host the app in the cloud.",{ff:"Not weather. In IT it means rented servers."}],
["ship","container","контейнер","B2","A package with an app and everything it needs to run anywhere.","Docker runs apps in containers."],
["ship","uptime","время безотказной работы","B2","The share of time a service is available.","The service promises 99.9% uptime."],

["fix","bug","баг, ошибка","A2","A mistake in code that causes wrong behavior.","There is a bug in the login form.",{ff:"Literally an insect, but in code it is an error."}],
["fix","debug","отлаживать","B1","Find and fix bugs.","I spent two hours debugging a missing comma."],
["fix","fix","исправлять","A2","Correct a problem.","Fix the typo in the README."],
["fix","crash","сбой, падение программы","B1","When a program suddenly stops working.","The app crashes on startup."],
["fix","exception","исключение","B2","An error that stops normal execution and can be caught.","The code throws an exception when the file is missing."],
["fix","runtime","время выполнения","B2","The moment or environment when a program is running.","This is a runtime error, not a compile error."],
["fix","compile","компилировать","B2","Translate source code into machine code before it runs.","The project fails to compile.",{ff:"In everyday English it also means to put a list together."}],
["fix","dependency","зависимость (пакет)","B1","An external package that your project needs.","Install dependencies with npm install.",{ff:"Not dependence as an addiction. It is a package."}],
["fix","refactoring","рефакторинг","B2","Improving code structure without changing what it does.","Refactoring made the function shorter."],
["fix","test","тест","A2","Code or steps that check that software works.","Run the tests before you commit."],
["fix","unit test","модульный тест","B1","A small test of one function or one piece of code.","Write a unit test for the login function."],
["fix","log","журнал событий, лог","B1","A record of events written by a program.","Check the log file for errors.",{ff:"Also a piece of wood."}],
["fix","breakpoint","точка останова","B2","A mark that pauses the program so you can inspect it.","Set a breakpoint on line 12."],
["fix","stack trace","трассировка стека","B2","A list of function calls that led to an error.","Read the stack trace from top to bottom."],
["fix","workaround","обходное решение","B2","A temporary way to avoid a problem.","Use this workaround until the bug is fixed."],
["fix","edge case","крайний случай","B2","An unusual situation at the limit of normal use.","Test the edge case of an empty list."]
];
var LV={A2:1,B1:2,B2:3};

var PH=[
{id:"meet",name:"Stand-ups and meetings",tip:"Use the past tense for what you did, “I'm working on” for now and “I'll” for plans. Say “blocked” when something stops you.",items:[
 ["Yesterday I fixed the login bug.","Вчера я исправил баг со входом."],
 ["Today I'm working on the API tests.","Сегодня я занимаюсь тестами API."],
 ["I'm blocked by the missing access to the server.","Меня блокирует отсутствие доступа к серверу."],
 ["Sorry, I didn't catch that. Could you repeat it, please?","Извините, я не расслышал. Не могли бы вы повторить?"],
 ["Can you share your screen?","Можете показать свой экран?"],
 ["I'll get back to you by Friday.","Я вернусь к вам с ответом до пятницы."]]},
{id:"interview",name:"Technical interview",tip:"Think aloud. Say what you do and why. A clear process matters as much as the answer.",items:[
 ["Let me think out loud.","Позвольте мне порассуждать вслух."],
 ["Can I ask a clarifying question?","Можно задать уточняющий вопрос?"],
 ["My approach is to use a hash table.","Мой подход: использовать хеш-таблицу."],
 ["The time complexity is O(n).","Временная сложность равна O(n)."],
 ["I haven't used that tool, but I learn quickly.","Я не работал с этим инструментом, но быстро учусь."],
 ["On a team project, I built the backend.","В командном проекте я написал серверную часть."]]},
{id:"commit",name:"Commit messages",tip:"Write commits in the imperative mood: “Add”, “Fix”, “Remove”. Imagine the sentence “This commit will …”.",items:[
 ["Add login form validation","Добавить проверку формы входа"],
 ["Fix crash when the cart is empty","Исправить падение при пустой корзине"],
 ["Update README with setup steps","Обновить README шагами установки"],
 ["Remove unused dependencies","Удалить неиспользуемые зависимости"],
 ["Refactor user service","Отрефакторить сервис пользователей"],
 ["Rename variables to improve readability","Переименовать переменные для читаемости"]]},
{id:"pr",name:"Pull requests",tip:"A good pull request says what changed, why, and how to check it.",items:[
 ["This PR adds a search bar to the header.","Этот PR добавляет строку поиска в шапку."],
 ["Closes #12","Закрывает задачу №12"],
 ["How to test: run npm start and open /search.","Как проверить: запустите npm start и откройте /search."],
 ["Ready for review.","Готово к проверке."],
 ["Please take a look when you have time.","Посмотрите, пожалуйста, когда будет время."]]},
{id:"review",name:"Code review",tip:"Be polite and specific. Suggest, do not command.",items:[
 ["Could you rename this variable? It's a bit unclear.","Не могли бы вы переименовать переменную? Она не очень понятна."],
 ["Nice catch!","Хорошая находка!"],
 ["LGTM (looks good to me).","Мне всё нравится, можно сливать."],
 ["I'd suggest extracting this into a function.","Предлагаю вынести это в отдельную функцию."],
 ["Nit: missing semicolon.","Мелочь: пропущена точка с запятой."],
 ["Good point, I'll fix it.","Верное замечание, исправлю."]]},
{id:"help",name:"Asking for help",tip:"Show what you tried and give a minimal example. People answer faster.",items:[
 ["I'm trying to upload a file, but I get a 500 error.","Я пытаюсь загрузить файл, но получаю ошибку 500."],
 ["I expected X, but I got Y.","Я ожидал X, а получил Y."],
 ["Here is a minimal example that reproduces the problem.","Вот минимальный пример, который воспроизводит проблему."],
 ["I've already tried clearing the cache.","Я уже пробовал очистить кэш."],
 ["Thanks in advance!","Заранее спасибо!"]]},
{id:"readme",name:"README sections",tip:"A README answers three questions: what is this, how to run it, how to help.",items:[
 ["Installation","Установка"],["Usage","Использование"],["Prerequisites: Node.js 20 or later.","Требования: Node.js 20 или новее."],
 ["Contributing","Как внести вклад"],["License","Лицензия"],["Known issues","Известные проблемы"]]}
];

var SPEAK={"HTTP":"H T T P","URL":"U R L","DNS":"D N S","API":"A P I","CI/CD":"C I, C D","SSL certificate":"S S L certificate","CRUD":"crud","DOM":"dom","CPU":"C P U","GPU":"G P U","IP address":"I P address","VPN":"V P N","LLM":"L L M","RAM":"ram"};

function $(s){return document.querySelector(s)}
function h(tag,props){
  var e=document.createElement(tag);
  if(props){Object.keys(props).forEach(function(k){
    var v=props[k];
    if(k==="class")e.className=v;
    else if(k==="text")e.textContent=v;
    else if(k.indexOf("on")===0)e[k]=v;
    else e.setAttribute(k,v);
  })}
  function add(c){
    if(c===null||c===undefined||c===false)return;
    if(Array.isArray(c)){c.forEach(add);return}
    e.append(c.nodeType?c:document.createTextNode(c));
  }
  for(var i=2;i<arguments.length;i++)add(arguments[i]);
  return e;
}
function shuffle(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=a[i];a[i]=a[j];a[j]=t}return a}
var CAN_SPEAK=("speechSynthesis" in window)&&("SpeechSynthesisUtterance" in window);
function speak(text,slow){
  if(!CAN_SPEAK)return;
  try{
    speechSynthesis.cancel();
    var u=new SpeechSynthesisUtterance(SPEAK[text]||text);
    u.lang="en-US";u.rate=slow?0.6:0.95;
    speechSynthesis.speak(u);
  }catch(e){}
}
function audioBtns(text){
  if(!CAN_SPEAK)return null;
  return h("div",{class:"audio"},
    h("button",{class:"icon-btn",type:"button","aria-label":"Play "+text,title:"Play",onclick:function(){speak(text,false)},text:"Play"}),
    h("button",{class:"icon-btn",type:"button","aria-label":"Play "+text+" slowly",title:"Slow",onclick:function(){speak(text,true)},text:"Slow"})
  );
}

/* tabs */
var TABS=["glossary","phrases","cards","quiz","about"];
function route(){
  var n=location.hash.slice(1);
  if(TABS.indexOf(n)<0)n="glossary";
  TABS.forEach(function(t){
    $("#panel-"+t).hidden=(t!==n);
    var a=$("#tab-"+t);
    if(t===n)a.setAttribute("aria-current","page");else a.removeAttribute("aria-current");
  });
}
window.addEventListener("hashchange",route);

/* glossary */
$("#total").textContent=T.length+" terms in "+STAGES.length+" areas of IT.";
var gs={stage:"all",level:"all",q:""};
function renderChips(){
  var box=$("#stages");box.textContent="";
  var all=[["all","All areas"]].concat(STAGES);
  all.forEach(function(s){
    box.append(h("button",{class:"chip",type:"button","aria-pressed":String(gs.stage===s[0]),text:s[1],onclick:function(){gs.stage=s[0];renderChips();renderList()}}));
  });
}
function entry(t,showStage){
  var ex=t[5],extra=t[6]||{};
  return h("article",{class:"entry"},
    showStage?h("p",{class:"stage",text:SN[t[0]]}):null,
    h("div",{class:"entry-head"},h("h3",{class:"term",text:t[1]}),h("span",{class:"badge",text:t[3]}),audioBtns(t[1])),
    h("p",{class:"ru",text:t[2]}),
    h("p",{class:"def",text:t[4]}),
    h("code",{text:ex}),
    extra.say?h("p",{class:"say",text:extra.say}):null,
    extra.ff?h("p",{class:"note"},h("b",{text:"False friend. "}),extra.ff):null
  );
}
function renderList(){
  var q=gs.q.trim().toLowerCase();
  var res=T.filter(function(t){
    if(gs.stage!=="all"&&t[0]!==gs.stage)return false;
    if(gs.level!=="all"&&LV[t[3]]>LV[gs.level])return false;
    if(!q)return true;
    return (t[1]+" "+t[2]+" "+t[4]).toLowerCase().indexOf(q)>=0;
  });
  var box=$("#list");box.textContent="";
  res.forEach(function(t){box.append(entry(t,gs.stage==="all"))});
  $("#count").textContent=res.length+" of "+T.length+" terms";
  if(!res.length)box.append(h("p",{class:"small",text:"Nothing found. Try a shorter word or another area."}));
}
$("#q").addEventListener("input",function(e){gs.q=e.target.value;renderList()});
$("#level").addEventListener("change",function(e){gs.level=e.target.value;renderList()});

/* phrasebook */
var phId="meet";
function copyText(text,btn,srcEl){
  function fallback(){
    try{var r=document.createRange();r.selectNodeContents(srcEl);var s=getSelection();s.removeAllRanges();s.addRange(r)}catch(e){}
    btn.textContent="Select";setTimeout(function(){btn.textContent="Copy"},1500);
  }
  try{
    navigator.clipboard.writeText(text).then(function(){btn.textContent="Copied";setTimeout(function(){btn.textContent="Copy"},1500)},fallback);
  }catch(e){fallback()}
}
function renderPhrases(){
  var g=$("#phgroups");g.textContent="";
  PH.forEach(function(p){g.append(h("button",{class:"chip",type:"button","aria-pressed":String(p.id===phId),text:p.name,onclick:function(){phId=p.id;renderPhrases()}}))});
  var cur=PH.filter(function(p){return p.id===phId})[0];
  $("#phtip").textContent=cur.tip;
  var box=$("#phlist");box.textContent="";
  cur.items.forEach(function(it){
    var en=h("p",{class:"en",text:it[0]});
    var btn=h("button",{class:"icon-btn",type:"button",text:"Copy"});
    btn.onclick=function(){copyText(it[0],btn,en)};
    box.append(h("div",{class:"phrase"},en,btn,h("p",{class:"tr",text:it[1]})));
  });
}

/* flashcards */
var deck=[],di=0,flipped=false,known={},learn=[];
function buildSelect(){
  var s=$("#cardstage");s.textContent="";
  s.append(h("option",{value:"all",text:"All terms"}));
  STAGES.forEach(function(x){s.append(h("option",{value:x[0],text:x[1]}))});
}
function startDeck(subset){
  var pool=subset||T.filter(function(t){var v=$("#cardstage").value;return v==="all"||t[0]===v});
  deck=shuffle(pool);di=0;flipped=false;known={};learn=[];
  renderCard();
}
function renderCard(){
  var a=$("#cardarea");a.textContent="";
  if(!deck.length)return;
  var done=Object.keys(known).length+learn.length;
  if(di>=deck.length){
    var kc=Object.keys(known).length;
    a.append(
      h("p",{class:"q",text:"Deck finished"}),
      h("p",{text:"You knew "+kc+" of "+deck.length+" terms."}),
      h("div",{class:"row"},
        learn.length?h("button",{class:"btn",type:"button",onclick:function(){startDeck(learn.map(function(i){return deck[i]}))},text:"Review "+learn.length+" unknown"}):null,
        h("button",{class:"btn ghost",type:"button",onclick:function(){startDeck()},text:"Start again"}))
    );
    return;
  }
  var t=deck[di];
  var face=flipped
    ?h("button",{class:"flash",type:"button",onclick:function(){flipped=false;renderCard()},"aria-label":"Show the term"},
        h("span",{class:"hint",text:"Meaning"}),
        h("span",{class:"big",text:t[2],style:"font-family:var(--body);font-size:1.75rem"}),
        h("span",{text:t[4]}),
        h("code",{text:t[5]}))
    :h("button",{class:"flash",type:"button",onclick:function(){flipped=true;renderCard()},"aria-label":"Show the meaning"},
        h("span",{class:"hint",text:SN[t[0]]+" · "+t[3]}),
        h("span",{class:"big",text:t[1]}),
        h("span",{class:"hint",text:"Tap to flip"}));
  a.append(
    h("div",{class:"bar"},h("i",{style:"width:"+Math.round(di/deck.length*100)+"%"})),
    h("p",{class:"count",text:(di+1)+" / "+deck.length}),
    face,
    h("div",{class:"row"},
      CAN_SPEAK?h("button",{class:"btn ghost",type:"button",onclick:function(){speak(t[1],false)},text:"Play"}):null,
      h("button",{class:"btn ghost",type:"button",onclick:function(){learn.push(di);di++;flipped=false;renderCard()},text:"Still learning"}),
      h("button",{class:"btn",type:"button",onclick:function(){known[di]=true;di++;flipped=false;renderCard()},text:"I know it"}))
  );
}
$("#shuffle").addEventListener("click",function(){startDeck()});
$("#cardstage").addEventListener("change",function(){startDeck()});

/* quiz */
var QN=10,quiz=null;
function newQuiz(){
  var qs=shuffle(T).slice(0,QN).map(function(t){
    var w0=t[2].split(/[ ,]/)[0];var others=shuffle(T.filter(function(o){return o[2]!==t[2]&&o[2].split(/[ ,]/)[0]!==w0})).slice(0,3).map(function(o){return o[2]});
    return {t:t,opts:shuffle(others.concat([t[2]]))};
  });
  quiz={qs:qs,i:0,score:0,missed:[],answered:false};
  renderQuiz();
}
function renderQuiz(){
  var a=$("#quizarea");a.textContent="";
  if(quiz.i>=quiz.qs.length){
    a.append(
      h("p",{class:"q",text:"Score: "+quiz.score+" / "+quiz.qs.length}),
      quiz.missed.length?h("div",{class:"feedback"},h("p",{class:"label",text:"Review these"}),
        quiz.missed.map(function(t){return h("p",null,h("b",{class:"term",style:"font-size:1rem",text:t[1]})," — "+t[2])})):h("p",{text:"No mistakes. Review the glossary next."}),
      h("div",{class:"row",style:"margin-top:12px"},h("button",{class:"btn",type:"button",onclick:newQuiz,text:"New quiz"}))
    );
    return;
  }
  var q=quiz.qs[quiz.i],t=q.t;
  a.append(
    h("div",{class:"bar",style:"max-width:560px;margin-bottom:10px"},h("i",{style:"width:"+Math.round(quiz.i/quiz.qs.length*100)+"%"})),
    h("p",{class:"count",text:"Question "+(quiz.i+1)+" of "+quiz.qs.length}),
    h("p",{class:"q"},"What does ",h("span",{text:t[1]})," mean?")
  );
  var opts=h("div",{class:"opts"});
  var fb=h("div",{class:"feedback",role:"status"});
  q.opts.forEach(function(o){
    var b=h("button",{class:"opt",type:"button",text:o});
    b.onclick=function(){
      if(quiz.answered)return;
      quiz.answered=true;
      var ok=(o===t[2]);
      if(ok)quiz.score++;else quiz.missed.push(t);
      Array.prototype.forEach.call(opts.children,function(c){
        c.disabled=true;
        if(c.textContent===t[2])c.classList.add("right");
        else if(c===b)c.classList.add("wrong");
      });
      fb.append(
        h("p",{text:(ok?"Correct. ":"Not quite. ")+t[4]}),
        h("code",{text:t[5]}),
        t[6]&&t[6].ff?h("p",{class:"note"},h("b",{text:"False friend. "}),t[6].ff):null,
        h("div",{class:"row"},
          CAN_SPEAK?h("button",{class:"btn ghost",type:"button",onclick:function(){speak(t[1],false)},text:"Play"}):null,
          h("button",{class:"btn",type:"button",onclick:function(){quiz.i++;quiz.answered=false;renderQuiz()},text:quiz.i+1>=quiz.qs.length?"See score":"Next"}))
      );
    };
    opts.append(b);
  });
  a.append(opts,fb);
}

/* survey */
var S1=[["Original, with a translator",43],["Russian translation only",30],["Original, no help",22],["Do not read it",4]];
var S2=[["Understand almost everything",17],["Understand, cannot translate exactly",43],["Miss most terms, get the idea",39]];
function bars(rows){
  return rows.map(function(r){
    return h("div",{class:"brow"},h("span",{text:r[0]}),h("div",{class:"bar"},h("i",{style:"width:"+r[1]+"%"})),h("b",{text:r[1]+"%"}));
  });
}
function renderSurvey(){
  $("#survey").append(
    h("div",null,h("h2",{text:"Why this site exists"}),
      h("p",{class:"small",text:"We asked 23 students (12 first-year, 11 second-year) how they work with technical English. Their answers set the features on this site."})),
    h("div",null,h("h3",{text:"How students read documentation"}),bars(S1)),
    h("div",null,h("h3",{text:"How well they understand technical English"}),bars(S2)),
    h("ul",{class:"finding"},
      h("li",null,h("b",{text:"65% "}),"find listening the hardest part. Every term here has audio at normal and slow speed."),
      h("li",null,h("b",{text:"52% "}),"have never worked on a shared project, so they have not written commits or reviews in English. See the phrasebook, which also covers stand-ups and interviews."),
      h("li",null,h("b",{text:"73% "}),"of students at B1 or higher still do not understand technical English fully. General English is not enough, so terms are grouped by area of IT.")),
    h("p",{class:"small",text:"The sample is small and based on self-assessment, so treat the numbers as a trend."})
  );
}

renderChips();renderList();renderPhrases();buildSelect();startDeck();newQuiz();renderSurvey();route();
})();
