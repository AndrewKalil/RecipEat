# Recipeat API


## Running Locally

Make sure you have Python 3.9 [installed locally](http://install.python-guide.org). To push to Heroku, you'll need to install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli), as well as [Postgres](https://devcenter.heroku.com/articles/heroku-postgresql#local-setup)


## Installation steps

1. Ensure you have python3 installed

2. Clone the repository
3. create a virtual environment using `virtualenv venv`
4. Activate the virtual environment by running `source venv/bin/activate`

- On Windows use `source venv\Scripts\activate`

5. Install the dependencies using `pip install -r requirements.txt`

6. Migrate existing db tables by running `python manage.py migrate`

7. Run the django collectstatic `python manage.py collectstatic`

8. Run the django development server using `python manage.py runserver`


## add change en heroku

```sh
$ heroku login
$ cd authentication_django/
$ git init
$ heroku git:clone -a recipeat-auth


$ git add .
$ git commit -am "make it better"
$ git push heroku master
$ heroku run python manage.py migrate
heroku run python manage.py createsuperuser
$ heroku open
```

## Have the complete repository

```sh
$ heroku login
$ heroku git:clone -a recipeat-auth
$ git push heroku master

$ heroku run python manage.py migrate
$ heroku open
```

## Deploying to Heroku

```sh
$ heroku create
$ git push heroku master

$ heroku run python manage.py migrate
$ heroku run python manage.py createsuperuser
$ heroku open
```
or

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)



## Information to admin django
- first run command: $ python manage.py createsuperuser
- Username (leave blank to use 'recipeat'): recipeat
- Email address: your.email@gmail.com
- Password: reci123
- $ heroku local -p 8000

## Documentation

For more information about using Python on Heroku, see these Dev Center articles:

- [Python on Heroku](https://devcenter.heroku.com/categories/python)
# deploy