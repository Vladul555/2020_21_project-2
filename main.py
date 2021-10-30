from sys import exit

import pygame

# CONSTANTS
Width_Main, Width_grid, Height_Main, Height_Grid = 800, 400, 600, 300
screen = pygame.display.set_mode((Width_Main, Height_Main))  # Opening the window
pygame.display.set_caption('BattleShips')  # The name of the game
BLACK = (0, 0, 0)

board = [[0 for x in range(11)] for y in range(11)]#Making the board
for i in range(11):
    for j in range(11):
        board[0][i] = i
        board[j][0] = j


def draw_grid():
    blockSize = 30  # Set the size of the grid block
    for x in range(Width_Main):
        for y in range(Height_Main):
            if 200 < x * blockSize < 520 and 100 < y * blockSize < 430:  # Putting the grid in a normal place
                rect = pygame.Rect(x * blockSize, y * blockSize, blockSize, blockSize)
                pygame.draw.rect(screen, BLACK, rect, 1)
    rect = pygame.Rect(blockSize * 7, blockSize * 4, blockSize * 11, blockSize * 11)
    pygame.draw.rect(screen, BLACK, rect, 2)


class Ship:  # A Class for the ships
    def __init__(self, size):
        if 2 <= size <= 5:  # Ships are between 2 and 5
            self.size = size
        else:
            self.size = None  # Illegal ships cannot be placed.

    def place(self, i, j,
              rotation):  # Places the first block of a ship in [i,j], if rotation is 1 the ship is horizontal
        # if the rotation is 2 the ship is vertical
        if self.size is not None:
            match rotation:
                case 1:
                    pass  # Place from j through j+size
                case 2:
                    pass  # Place from i to i+size
                case _:  # Default case is illegal, therefore will not act
                    pass


def Print_Board(board):
    for row in board:
        print(row)


def main():
    pygame.init()
    clock = pygame.time.Clock()  # import for time and fps
    test_surface = pygame.image.load('Graphics/water.png')  # importing the backgrounds
    Print_Board(board)

    while True:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:  # Runs until the user exits the window
                pygame.quit()
                exit()

        screen.blit(test_surface, (0, 0))
        draw_grid()
        pygame.display.update()
        clock.tick(60)  # limits the fps to 60


if __name__ == '__main__':
    main()
