from locust import HttpLocust, TaskSet, task

def apple(l):
    response=l.client.get("/url/apple")

def banana(l):
    response=l.client.get("/url/banana")

def orange(l):
    response=l.client.get("/url/orange")

class UserBehavior(TaskSet):

    @task(5)
    def on_apple(self):
        apple(self)

    @task(3)
    def on_banana(self):
        banana(self)

    @task(10)
    def on_orange(self):
        orange(self)


class WebsiteUser(HttpLocust):
    task_set = UserBehavior
    min_wait = 1000
    max_wait = 5000
