# Blue-Green Deployment (Hot/Cold Deployment)

A **blue-green deployment** is a release strategy used to update applications with **zero downtime** and **minimal risk**. It works by maintaining two separate but identical production environments.

## Key Concepts

- **Blue (Hot)** – The environment currently serving live traffic.
- **Green (Cold)** – The environment prepared with the new version of the application.

## How It Works

1. **Maintain Two Environments**  
   One environment is active and serving users (hot), while the other remains idle or used for testing (cold).

2. **Deploy to the Cold Environment First**  
   The new release is deployed to the cold side while the hot side continues serving traffic.

3. **Switch Traffic Using a Load Balancer**  
   - The load balancer stops sending **new** requests to the hot environment.  
   - In-flight requests on the hot side are allowed to finish.  
   - New traffic is directed to the cold environment, now running the updated application.

4. **Cold Becomes Hot**  
   After the switch, the cold side is now the live, active (“hot”) environment.

5. **Upgrade the Former Hot Environment**  
   The old hot environment becomes the cold side. It can now be updated to the new version.

6. **Optional Hot/Hot Mode**  
   After both environments are updated, they can be run in active-active mode if desired.

## Benefits

- **Zero downtime deployments**  
- **Fast, safe rollback** (just switch back to the previous environment)  
- **Better reliability and testing**  
- **Smooth traffic handoff using the load balancer**

This approach ensures seamless upgrades with minimal disruption to users.
