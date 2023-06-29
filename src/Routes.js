import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PostFormModal from "./components/PostFormModal";
import PostList from "./components/PostList";
import PostCommentsPage from "./components/PostCommentsPage";
import UserPage from "./components/UserPage";
import SubPage from "./components/SubPage";
import TopSubsPanel from "./components/TopSubsPanel";
import SearchResults from "./components/SearchResults";
import NotFoundPage from "./components/NotFoundPage";
import Chat from "./components/Chat";
import storageService from "./utils/localStorage";

import { Container } from "@material-ui/core/";
import { useMainPaperStyles } from "./styles/muiStyles";

const Routes = () => {
    const classes = useMainPaperStyles();

    const loggedUser = storageService.loadUser() || false;

    return (
        <Switch>
            <Route exact path="/">
                {loggedUser ? (
                    <Container disableGutters className={classes.homepage}>
                        <div className={classes.postsPanel}>
                            <PostFormModal />
                            <PostList />
                        </div>
                        <TopSubsPanel />
                    </Container>
                ) : (
                    ""
                )}
            </Route>

            <Route exact path="/comments/:id">
                {loggedUser ? <PostCommentsPage /> : <Redirect to="/" />}
            </Route>
            <Route exact path="/u/:username">
                {loggedUser ? <UserPage /> : <Redirect to="/" />}
            </Route>
            <Route exact path="/r/:sub">
                {loggedUser ? <SubPage /> : <Redirect to="/" />}
            </Route>

            <Route exact path="/search/:query">
                {loggedUser ? <SearchResults /> : <Redirect to="/" />}
            </Route>
            <Route exact path="/messenger">
                {loggedUser ? <Chat /> : <Redirect to="/" />}
            </Route>
            <Route>
                <NotFoundPage />
            </Route>
        </Switch>
    );
};

export default Routes;
