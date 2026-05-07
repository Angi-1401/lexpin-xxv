class YoutubeChannel:
    def __init__(self):
        self.subscribers = []

    def subscribe(self, user):
        self.subscribers.append(user)

    def notify_subscribers(self, video_title):
        for subscriber in self.subscribers:
            subscriber.update(video_title)

    def upload_video(self, video_title):
        print(f"Uploading video: {video_title}")
        self.notify_subscribers(video_title)


class User:
    def update(self, video_title):
        print(f"Received notification for video: {video_title}")


channel = YoutubeChannel()

user1 = User()
user2 = User()

channel.subscribe(user1)
channel.subscribe(user2)

channel.upload_video("Design Patterns in Python")
# Output:
# Uploading video: Design Patterns in Python
# Received notification for video: Design Patterns in Python
# Received notification for video: Design Patterns in Python
