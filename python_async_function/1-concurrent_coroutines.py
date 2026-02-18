#!/usr/bin/env python3
"""THIS IS ANKARA MESSI, ANKARA NARIMAN"""
import asyncio
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int=4, max_delay: int=5):
    """This function is about async loops"""
    result: list = []
    tasks = [wait_random(max_delay) for _ in range(n)]
    for task in asyncio.as_completed(tasks):
        yielded_result = await task
        result.append(yielded_result)

    return result
