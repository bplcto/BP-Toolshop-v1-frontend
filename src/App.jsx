import React from 'react';
import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';

import Routers from './Route';
import ChartistProvider from './_helper/Chartist/ChartistProvider';
import ChartjsProvider from './_helper/Chartjs/ChartProvider';
import GoogleChartProvider from './_helper/GoogleChart/GoogleChartProvider';
import ProjectProvider from './_helper/Project/ProjectProvider';
import ChatProvider from './_helper/Chat/ChatProvider';
import ContactProvider from './_helper/Contact/ContactProvider';
import TaskProvider from './_helper/Task/TaskProvider';
import GalleryProvider from './_helper/Gallery/GalleryProvider';
import TableProvider from './_helper/Table/TableProvider';
import BookmarkProvider from './_helper/Bookmark/BookmarkProvider';
import TodoProvider from './_helper/Todo/TodoProvider';
import EmailProvider from './_helper/Email/EmailProvider';
import SearchResultProvider from './_helper/SearchResult/SearchResult';
import ProductProvider from './_helper/Ecommerce/Product/ProductProvider';
import CartProvider from './_helper/Ecommerce/Cart/CardProvider';
import FilterProvider from './_helper/Ecommerce/Filter/FilterProvider';
import WishListProvider from './_helper/Ecommerce/Wishlist/WishlistProvider';
import JobSearchProvider from './_helper/JobSearch/JobSearchProvider';
import LearningProvider from './_helper/Learning/LearningProvider';
import FaqProvider from './_helper/Faq/FaqProvider';
import AnimationThemeProvider from './_helper/AnimationTheme/AnimationThemeProvider';
import CustomizerProvider from './_helper/Customizer/CustomizerProvider';

import __Login from './__pages/__auth/__Login';
import __Register from './__pages/__auth/__Register';
import __Dashboard from './__pages/__Dashboard';
import __ForgetPwd from './__pages/__auth/__ForgetPwd';

const App = () => (
  <div className='App'>
    <CustomizerProvider>
      <FaqProvider>
        <LearningProvider>
          <JobSearchProvider>
            <WishListProvider>
              <FilterProvider>
                <CartProvider>
                  <ProductProvider>
                    <SearchResultProvider>
                      <EmailProvider>
                        <TodoProvider>
                          <BookmarkProvider>
                            <TableProvider>
                              <GalleryProvider>
                                <TaskProvider>
                                  <ContactProvider>
                                    <ChatProvider>
                                      <ProjectProvider>
                                        <GoogleChartProvider>
                                          <ChartjsProvider>
                                            <ChartistProvider>
                                              <AnimationThemeProvider>
                                                <Routers />
                                                <Router>
                                                  <Routes>
                                                    <Route path='/login' Component={__Login} />
                                                    <Route path='/register' Component={__Register} />
                                                    <Route path='/forget_password' Component={__ForgetPwd} />
                                                  </Routes>
                                                </Router>
                                              </AnimationThemeProvider>
                                            </ChartistProvider>
                                          </ChartjsProvider>
                                        </GoogleChartProvider>
                                      </ProjectProvider>
                                    </ChatProvider>
                                  </ContactProvider>
                                </TaskProvider>
                              </GalleryProvider>
                            </TableProvider>
                          </BookmarkProvider>
                        </TodoProvider>
                      </EmailProvider>
                    </SearchResultProvider>
                  </ProductProvider>
                </CartProvider>
              </FilterProvider>
            </WishListProvider>
          </JobSearchProvider>
        </LearningProvider>
      </FaqProvider>
    </CustomizerProvider>
  </div>
);

export default App;
