import debugpy

class DebugMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        # Check for the XDEBUG_SESSION_START HTTP header
        if request.META.get("HTTP_XDEBUG_SESSION_START"):
            # Start the debugpy server and wait for the VS Code debugger
            print("------>Detected a debug request")
            debugpy.listen(("0.0.0.0", 5678))
            print("------>Waiting for Editor debug request to connect")
            debugpy.wait_for_client()
        response = self.get_response(request)
        return response
