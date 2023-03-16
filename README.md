# NextJS13 RTK Essentials

## Global State Management

- Global State Managers are global
- If they are used on the Server they could produces a potential Cross-Request Data Leakage

## Cross-Request Data Leakage

- To mitigate that Risk of Cross-Request Data Leakage

1. The Global Store at the Root Layout should be purged to remove the previous Request State
2. All asynchronous Requests should run first, then load the Global Store, then let the Render go so that the Rest of the Request Handling is synchronous
