import webapp2


# Main Handler
main = open('index.html').read()


# Main page will render index template
class MainPage(webapp2.RequestHandler):
    def get(self):
        """Index page"""
        self.response.write(main)


app = webapp2.WSGIApplication([('/', MainPage)],
                              debug=False)
