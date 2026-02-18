#!/usr/bin/env python3
import asyncio
import random
from typing import Union
"""THis is async"""

async def wait_random(max_delay: Union[int, float]) -> float:
    """This is async func"""
    result: float = random.uniform(0, max_delay)
    await asyncio.sleep(result)
    return result
