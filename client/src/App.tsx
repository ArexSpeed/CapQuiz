import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddCategoryPage from "./pages/categories/AddCategoryPage";
import CategoryListPage from "./pages/categories/CategoryListPage";
import CategoryOutlet from "./pages/categories/CategoryOutlet";
import EditCategoryPage from "./pages/categories/EditCategoryPage";
import MainPage from "./pages/Main";
import AddQuestionPage from "./pages/quiz/AddQuestionPage";
import EditQuestionPage from "./pages/quiz/EditQuestionPage";
import QuizOutlet from "./pages/quiz/QuizOutlet";
import QuizPage from "./pages/quiz/QuizPage";
import ResultPage from "./pages/ResultPage";
import UsersPage from "./pages/UsersPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/categories" element={<CategoryOutlet />}>
          <Route index element={<CategoryListPage />} />
          <Route path="add" element={<AddCategoryPage />} />
          <Route path="edit">
            <Route path=":categoryId" element={<EditCategoryPage />} />
          </Route>
        </Route>
        <Route path="/results" element={<ResultPage />}>
          <Route path=":user" element={<ResultPage />} />
        </Route>
        <Route path="/users" element={<UsersPage />} />
        <Route path="/quiz" element={<QuizOutlet />}>
          <Route index element={<QuizPage />} />
          <Route path="add" element={<AddQuestionPage />} />
          <Route path="edit">
            <Route path=":quizId" element={<EditQuestionPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
