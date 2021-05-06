import React from 'react'
import AsyncStroage from '@react-native-async-storage/async-storage'
import { ContextProvider } from 'react-simplified-context'
import Navigator from './Navigator'

export default class App extends React.Component {
  state = {
    articles: [],
    id: 0,
  }

  componentDidMount() {
    AsyncStroage.getItem('@diary:state').then((state) => {
      this.setState(JSON.parse(state))
    })
  }

  save = () => {
    AsyncStroage.setItem('@diary:state', JSON.stringify(this.state)) 
  }

  render() {
    return (
      <ContextProvider 
        articles={this.state.articles}

        create={(title, content) => {

          const now = new Date()

          this.setState({
            articles: [{
              id: this.state.id,
              title: title,
              content: content,
              bookmarked: false,
              date: `${now.getFullYear()}년 ${now.getMonth() + 1}월 ${now.getDate()}일`
            }].concat(this.state.articles),
            id: this.state.id + 1,
          }, this.save)
          
        }}

        update={(id, title, content) => {
          const newArticles = [...this.state.articles]
          const index = newArticles.findIndex((a) => {
            return a.id === id
          })

          newArticles[index].title = title
          newArticles[index].content = content

          this.setState({
            articles: newArticles,
          }, this.save)
        }}

        toggle={(id) => {
          const newArticles = [...this.state.articles]
          const index = newArticles.findIndex((a) => {
            return a.id === id
          })

          newArticles[index].bookmarked = !newArticles[index].bookmarked

          this.setState({
            articles: newArticles,
          }, this.save)
        }}
      >
        <Navigator />
      </ContextProvider>
    );
  }
}