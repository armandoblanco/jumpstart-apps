import { Stack } from "@fluentui/react";
import {
    makeStyles,
    Body1,
    Caption1,
    Button,
  } from "@fluentui/react-components";
import { ArrowReplyRegular, ShareRegular } from "@fluentui/react-icons";  
import {
    Card,
    CardFooter,
    CardHeader,
    CardPreview,
    Text,
  } from "@fluentui/react-components";

  const resolveAsset = (asset: string) => {
    const ASSET_URL =
      "https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/src/assets/";
  
    return `${ASSET_URL}${asset}`;
  };


const useStyles = makeStyles({
    card: {
      margin: "auto",
      width: "350px",
      maxWidth: "100%",
      paddingLeft: "40px"
    },
  });

const Health = () => {
    const styles = useStyles();
    return (

        <Stack horizontalAlign="start" grow={1}>
            <Stack.Item align="start" grow={3}>
                <Stack horizontal>
                <Card className={styles.card}>
                    <CardHeader
                        image={
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M6 3C4.34315 3 3 4.34315 3 6V14C3 15.6569 4.34315 17 6 17H14C15.6569 17 17 15.6569 17 14V6C17 4.34315 15.6569 3 14 3H6ZM4 14V8H16V14C16 15.1046 15.1046 16 14 16H6C4.89543 16 4 15.1046 4 14ZM16 7H4V6C4 4.89543 4.89543 4 6 4H14C15.1046 4 16 4.89543 16 6V7ZM6.75 6.25C7.16421 6.25 7.5 5.91421 7.5 5.5C7.5 5.08579 7.16421 4.75 6.75 4.75C6.33579 4.75 6 5.08579 6 5.5C6 5.91421 6.33579 6.25 6.75 6.25ZM13.25 6.25C13.6642 6.25 14 5.91421 14 5.5C14 5.08579 13.6642 4.75 13.25 4.75C12.8358 4.75 12.5 5.08579 12.5 5.5C12.5 5.91421 12.8358 6.25 13.25 6.25ZM10.75 5.5C10.75 5.91421 10.4142 6.25 10 6.25C9.58579 6.25 9.25 5.91421 9.25 5.5C9.25 5.08579 9.58579 4.75 10 4.75C10.4142 4.75 10.75 5.08579 10.75 5.5ZM6 9C5.44772 9 5 9.44771 5 10V14C5 14.5523 5.44772 15 6 15H14C14.5523 15 15 14.5523 15 14V10C15 9.44772 14.5523 9 14 9H6ZM6 14V10H14V14H6Z" fill="#242424"/>
                            </svg>
                        }
                        header={
                        <Body1>
                            Oven Health
                        </Body1>
                        }
                        description={<Caption1></Caption1>}
                    />

                    <CardPreview>
                        <Text>5,050</Text>
                    </CardPreview>

                    <CardFooter>
                    <Text>Shoppers per day</Text>
                    <Text>Customers per week</Text>                        
                    </CardFooter>
                </Card>
      
                <Card className={styles.card}>
                    <CardHeader
                        image={
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M10 6.5C10.2761 6.5 10.5 6.72386 10.5 7V12.063C11.3626 12.285 12 13.0681 12 14C12 15.1046 11.1046 16 10 16C8.89543 16 8 15.1046 8 14C8 13.0681 8.63739 12.285 9.5 12.063V7C9.5 6.72386 9.72386 6.5 10 6.5ZM10 2C8.34315 2 7 3.34315 7 5L7.00008 11.3541C6.37808 12.0589 6 12.9857 6 14C6 16.2091 7.79086 18 10 18C12.2091 18 14 16.2091 14 14C14 12.9857 13.6219 12.0589 12.9999 11.3541L13 5C13 3.34315 11.6569 2 10 2ZM10 3C11.1046 3 12 3.89543 12 5L11.9999 11.7546L12.1428 11.9004C12.6736 12.442 13 13.1824 13 14C13 15.6568 11.6569 17 10 17C8.34315 17 7 15.6568 7 14C7 13.1824 7.32642 12.442 7.85719 11.9004L8.00008 11.7546L8 5C8 3.89543 8.89543 3 10 3Z" fill="#242424"/>
                        </svg>
                        }
                        header={
                        <Body1>
                            Fridge ABC 123
                        </Body1>
                        }
                        description={<Caption1></Caption1>}
                    />

                    <CardPreview>
                        <Text>7.5</Text>
                    </CardPreview>

                    <CardFooter>
                    <Text>Average freezer temp</Text>                        
                    </CardFooter>
                </Card>       
                <Card className={styles.card}>
                    <CardHeader
                        image={
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M10 6.5C10.2761 6.5 10.5 6.72386 10.5 7V12.063C11.3626 12.285 12 13.0681 12 14C12 15.1046 11.1046 16 10 16C8.89543 16 8 15.1046 8 14C8 13.0681 8.63739 12.285 9.5 12.063V7C9.5 6.72386 9.72386 6.5 10 6.5ZM10 2C8.34315 2 7 3.34315 7 5L7.00008 11.3541C6.37808 12.0589 6 12.9857 6 14C6 16.2091 7.79086 18 10 18C12.2091 18 14 16.2091 14 14C14 12.9857 13.6219 12.0589 12.9999 11.3541L13 5C13 3.34315 11.6569 2 10 2ZM10 3C11.1046 3 12 3.89543 12 5L11.9999 11.7546L12.1428 11.9004C12.6736 12.442 13 13.1824 13 14C13 15.6568 11.6569 17 10 17C8.34315 17 7 15.6568 7 14C7 13.1824 7.32642 12.442 7.85719 11.9004L8.00008 11.7546L8 5C8 3.89543 8.89543 3 10 3Z" fill="#242424"/>
                            </svg>
                        }
                        header={
                        <Body1>
                            Fridge ABC 123
                        </Body1>
                        }
                        description={<Caption1></Caption1>}
                    />

                    <CardPreview>
                        <Text>7.5</Text>
                    </CardPreview>

                    <CardFooter>
                    <Text>Average freezer temp</Text>                        
                    </CardFooter>
                </Card>                                     
                </Stack> 
                {/* <Stack horizontalAlign="center">
                <Card className={styles.card}>
                    <CardHeader
                        image={
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M6.99508 2.41326C6.94517 2.14166 6.68399 1.95884 6.41172 2.00491C6.13945 2.05097 5.95919 2.30849 6.00909 2.58009L6.01904 2.63273C4.29044 3.20531 3.27054 4.12182 2.6923 5.14568C2.12734 6.14604 2.01471 7.19621 2.00156 8.00009H2.00013V8.00479L1.33048 8.84238C0.783964 9.52596 0.936325 10.5303 1.66099 11.0211L10.3158 16.8821C11.3916 17.6107 12.6611 18.0001 13.9605 18.0001H16.7501C17.9928 18.0001 19.0001 16.9927 19.0001 15.7501C19.0001 14.4891 17.9756 13.5716 16.9304 13.24C16.3211 13.0467 15.7508 12.7314 15.4157 12.2352L12.3993 7.04431C12.4616 7.0358 12.524 7.02627 12.5864 7.01571C12.8587 6.96964 13.0389 6.71212 12.989 6.44053C12.9391 6.16893 12.6779 5.98611 12.4056 6.03217C9.84558 6.46533 7.43811 4.8242 6.99508 2.41326ZM11.269 7.08948L14.559 12.7513C14.564 12.7599 14.5693 12.7684 14.5748 12.7767C15.0898 13.5522 15.9151 13.967 16.628 14.1932C17.1133 14.3472 17.5162 14.6416 17.7572 15H13.9905C13.293 15 12.6114 14.7916 12.0331 14.4015L10.3398 13.2592L11.3724 12.6629C11.9703 12.3178 12.1752 11.5533 11.83 10.9554L11.0619 9.6251C10.7167 9.02724 9.95225 8.8224 9.35439 9.16757L6.61719 10.7479L5.66726 10.1071L6.37684 9.6974C6.9747 9.35222 7.17954 8.58773 6.83437 7.98986L4.73849 4.3597C5.14914 4.06985 5.66092 3.8078 6.30038 3.59301C7.10124 5.6044 9.06508 6.96496 11.269 7.08948ZM9.28259 13.7522L9.33337 13.8402L9.37626 13.8154L11.4739 15.2305C12.2173 15.732 13.0937 16 13.9905 16H17.9751C17.8594 16.5706 17.3549 17.0001 16.7501 17.0001H13.9605C12.861 17.0001 11.7868 16.6706 10.8765 16.0541L2.22171 10.1931C1.98016 10.0295 1.92937 9.69469 2.11154 9.46683L2.39834 9.10811L6.5509 11.9094L6.56451 11.933L6.576 11.9264L9.28259 13.7522ZM9.41745 12.637L7.53951 11.3701L9.85439 10.0336C9.97396 9.96456 10.1269 10.0055 10.1959 10.1251L10.9639 11.4554C11.033 11.575 10.992 11.7279 10.8724 11.7969L9.41745 12.637ZM3.56303 5.63744C3.67579 5.43779 3.81253 5.23869 3.97915 5.04449L5.96834 8.48986C6.03738 8.60944 5.99641 8.76234 5.87684 8.83137L4.74494 9.48487L3.00013 8.30781V8.18009C3.00013 7.4148 3.08222 6.4888 3.56303 5.63744Z" fill="#242424"/>
                            </svg>
                        }
                        header={
                        <Body1>
                            Daily foot traffic
                        </Body1>
                        }
                        description={<Caption1></Caption1>}
                    />

                    <CardPreview>
                        <Text>5,050</Text>
                    </CardPreview>

                    <CardFooter>
                    <Text>Shoppers per day</Text>
                    <Text>Customers per week</Text>                        
                    </CardFooter>
                </Card>
                </Stack> 
                <Stack horizontalAlign="end">
                <Card className={styles.card}>
                    <CardHeader
                        image={
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M6.99508 2.41326C6.94517 2.14166 6.68399 1.95884 6.41172 2.00491C6.13945 2.05097 5.95919 2.30849 6.00909 2.58009L6.01904 2.63273C4.29044 3.20531 3.27054 4.12182 2.6923 5.14568C2.12734 6.14604 2.01471 7.19621 2.00156 8.00009H2.00013V8.00479L1.33048 8.84238C0.783964 9.52596 0.936325 10.5303 1.66099 11.0211L10.3158 16.8821C11.3916 17.6107 12.6611 18.0001 13.9605 18.0001H16.7501C17.9928 18.0001 19.0001 16.9927 19.0001 15.7501C19.0001 14.4891 17.9756 13.5716 16.9304 13.24C16.3211 13.0467 15.7508 12.7314 15.4157 12.2352L12.3993 7.04431C12.4616 7.0358 12.524 7.02627 12.5864 7.01571C12.8587 6.96964 13.0389 6.71212 12.989 6.44053C12.9391 6.16893 12.6779 5.98611 12.4056 6.03217C9.84558 6.46533 7.43811 4.8242 6.99508 2.41326ZM11.269 7.08948L14.559 12.7513C14.564 12.7599 14.5693 12.7684 14.5748 12.7767C15.0898 13.5522 15.9151 13.967 16.628 14.1932C17.1133 14.3472 17.5162 14.6416 17.7572 15H13.9905C13.293 15 12.6114 14.7916 12.0331 14.4015L10.3398 13.2592L11.3724 12.6629C11.9703 12.3178 12.1752 11.5533 11.83 10.9554L11.0619 9.6251C10.7167 9.02724 9.95225 8.8224 9.35439 9.16757L6.61719 10.7479L5.66726 10.1071L6.37684 9.6974C6.9747 9.35222 7.17954 8.58773 6.83437 7.98986L4.73849 4.3597C5.14914 4.06985 5.66092 3.8078 6.30038 3.59301C7.10124 5.6044 9.06508 6.96496 11.269 7.08948ZM9.28259 13.7522L9.33337 13.8402L9.37626 13.8154L11.4739 15.2305C12.2173 15.732 13.0937 16 13.9905 16H17.9751C17.8594 16.5706 17.3549 17.0001 16.7501 17.0001H13.9605C12.861 17.0001 11.7868 16.6706 10.8765 16.0541L2.22171 10.1931C1.98016 10.0295 1.92937 9.69469 2.11154 9.46683L2.39834 9.10811L6.5509 11.9094L6.56451 11.933L6.576 11.9264L9.28259 13.7522ZM9.41745 12.637L7.53951 11.3701L9.85439 10.0336C9.97396 9.96456 10.1269 10.0055 10.1959 10.1251L10.9639 11.4554C11.033 11.575 10.992 11.7279 10.8724 11.7969L9.41745 12.637ZM3.56303 5.63744C3.67579 5.43779 3.81253 5.23869 3.97915 5.04449L5.96834 8.48986C6.03738 8.60944 5.99641 8.76234 5.87684 8.83137L4.74494 9.48487L3.00013 8.30781V8.18009C3.00013 7.4148 3.08222 6.4888 3.56303 5.63744Z" fill="#242424"/>
                            </svg>
                        }
                        header={
                        <Body1>
                            Daily foot traffic
                        </Body1>
                        }
                        description={<Caption1></Caption1>}
                    />

                    <CardPreview>
                        <Text>5,050</Text>
                    </CardPreview>

                    <CardFooter>
                    <Text>Shoppers per day</Text>
                    <Text>Customers per week</Text>                        
                    </CardFooter>
                </Card>
                </Stack>                                  */}
            </Stack.Item>
        </Stack>
    );
  };
  
  export default Health;