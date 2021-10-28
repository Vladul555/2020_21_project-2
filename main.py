import pygame

pygame.init()
WIDTH, HEIGHT = 900, 600
screen = pygame.display.set_mode((WIDTH, HEIGHT))  ##Opening the window
pygame.display.set_caption('BattleShips')  ##The name of the window
clock = pygame.time.Clock()  ## import for time and fps


def main():
    Run = True
    while Run:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:  ## Runs until the user exits the window
                Run = False
        clock.tick(60)  ## limits the fps to 60

    pygame.quit()
pipi

if __name__ == "__main__":  ## Calls the main function
    main()
